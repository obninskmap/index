'use strict';
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { createMockEnvironment } = require('./dom-mock');

function runAtlasSuite(reporter) {
  const root = path.resolve(__dirname, '..');
  const app = fs.readFileSync(path.join(root, 'assets/js/app.js'), 'utf8');
  const setup = () => {
    const env = createMockEnvironment({ mobile: true });
    vm.runInContext(app, env.sandbox);
    return env;
  };
  const click = (env, id) =>
    env.doc.getElementById(id).dispatchEvent({ type: 'click' });
  const search = (env, query) => {
    const input = env.doc.getElementById('search');
    input.value = query;
    input.dispatchEvent({ type: 'input' });
  };
  reporter.test(
    'Mobile views preserve query, filter and selected organization',
    () => {
      const env = setup();
      assert.strictEqual(
        env.doc.getElementById('workspace').dataset.view,
        'list',
      );
      const filter = env.doc
        .querySelectorAll('[data-group]')
        .find((b) => b.dataset.group === 'Ядерные технологии');
      filter.dispatchEvent({ type: 'click' });
      search(env, 'ФЭИ');
      click(env, 'place-ippe');
      click(env, 'view-map');
      assert.strictEqual(
        env.doc.getElementById('workspace').dataset.view,
        'map',
      );
      assert.strictEqual(
        env.doc.getElementById('view-map').getAttribute('aria-pressed'),
        'true',
      );
      click(env, 'view-list');
      assert.strictEqual(env.eval('selected'), 'ippe');
      assert.strictEqual(env.eval('activeGroup'), 'Ядерные технологии');
      assert.strictEqual(env.doc.getElementById('search').value, 'ФЭИ');
      assert.strictEqual(env.eval('visiblePlaces.length'), 1);
    },
  );
  reporter.test(
    'Hover does not open detail; marker click opens the organization',
    () => {
      const env = setup();
      const marker = env.markersCreated[0];
      assert.strictEqual(marker.listeners.has('mouseover'), false);
      assert.strictEqual(env.eval('selected'), null);
      marker.listeners.get('click')[0]();
      assert.strictEqual(env.eval('selected'), env.sandbox.window.PLACES[0].id);
    },
  );
  reporter.test(
    'Filtering updates both counters and reset restores all organizations',
    () => {
      const env = setup();
      search(env, 'Тайфун');
      assert.strictEqual(env.doc.getElementById('count').textContent, '1 / 4');
      assert.strictEqual(
        env.doc.querySelector('.map-label .muted').textContent,
        '/ организаций: 1 из 4',
      );
      assert.strictEqual(env.doc.getElementById('reset-filters').hidden, false);
      assert.strictEqual(
        env.mapInstances[0].layers.has(env.markersCreated[2]),
        true,
      );
      assert.strictEqual(
        env.mapInstances[0].layers.has(env.markersCreated[0]),
        false,
      );
      click(env, 'reset-filters');
      assert.strictEqual(env.doc.getElementById('count').textContent, '4 / 4');
      assert.strictEqual(env.doc.getElementById('reset-filters').hidden, true);
    },
  );
  reporter.test(
    'Overview fits filtered places and preserves map bounds for empty results',
    () => {
      const env = setup();
      search(env, 'Тайфун');
      click(env, 'overview');
      const map = env.mapInstances[0];
      assert.strictEqual(map.fittedBounds.length, 1);
      assert.deepStrictEqual(
        Array.from(map.fittedBounds[0]),
        Array.from(env.sandbox.window.PLACES[2].coords),
      );
      const previous = map.fittedBounds;
      search(env, 'несуществующая организация');
      assert.strictEqual(env.doc.getElementById('empty-results').hidden, false);
      click(env, 'overview');
      assert.strictEqual(map.fittedBounds, previous);
    },
  );
  reporter.test('Street tiles are the default basemap', () => {
    const env = setup();
    assert.ok(env.eval('tiles.url').includes('tile.openstreetmap.org'));
  });
  reporter.test(
    'Typhoon marker uses the coordinates from its official contact map',
    () => {
      const env = setup();
      const place = env.sandbox.window.PLACES.find((p) => p.id === 'typhoon');
      assert.deepStrictEqual(Array.from(place.coords), [55.09945, 36.60644]);
      assert.strictEqual(
        place.geoSource,
        'https://www.rpatyphoon.ru/contacts/',
      );
      const marker = env.markersCreated.find(
        (m) => m.opts.title === place.name,
      );
      assert.deepStrictEqual(
        Array.from(marker.coords),
        Array.from(place.coords),
      );
    },
  );
  reporter.test(
    'Changing the hash opens the linked place even with an active filter',
    () => {
      const env = setup();
      search(env, 'Тайфун');
      env.sandbox.window.location.hash = '#ippe';
      env.doc.dispatchEvent({ type: 'hashchange' });
      assert.strictEqual(env.eval('selected'), 'ippe');
      assert.strictEqual(env.doc.getElementById('search').value, '');
      assert.strictEqual(env.doc.getElementById('count').textContent, '4 / 4');
    },
  );
  reporter.test(
    'Local HTML links, images, scripts and fragment targets resolve',
    () => {
      const pages = [
        'index.html',
        'catalog.html',
        'project.html',
        'materials/current/Пояснительная_записка.html',
      ];
      for (const name of pages) {
        const html = fs.readFileSync(path.join(root, name), 'utf8');
        const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
        assert.strictEqual(
          new Set(ids).size,
          ids.length,
          `Duplicate IDs in ${name}`,
        );
        for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
          const url = match[1];
          if (/^(?:[a-z]+:|\/\/)/i.test(url)) continue;
          const [file, fragment] = url.split('#');
          const target = path.resolve(
            root,
            path.dirname(name),
            decodeURIComponent(file.split('?')[0] || path.basename(name)),
          );
          assert.ok(fs.existsSync(target), `${name}: missing ${url}`);
          if (fragment && /\.html$/i.test(target)) {
            const body = fs.readFileSync(target, 'utf8');
            assert.ok(
              body.includes(`id="${fragment}"`),
              `${name}: missing fragment ${url}`,
            );
          }
        }
      }
      const env = setup();
      for (const place of env.sandbox.window.PLACES) {
        for (const photo of place.photos || [])
          assert.ok(fs.existsSync(path.join(root, photo.url)), photo.url);
      }
    },
  );
}
module.exports = { runAtlasSuite };
