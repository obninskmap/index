# DESIGN SYSTEM: GRAND LUXE EDITORIAL & ARCHITECTURAL MODERNISM
> **Концепция дизайна: Высокая эстетика, строгая геометрия, монументальный шик и типографика с засечками.**
> *Проект: «Научный Обнинск» / Премиальная интерактивная платформа*

---

## 1. ФИЛОСОФИЯ И МАНИФЕСТ СТИЛЯ

На смену безликому «пластиковому» веб-дизайну с круглыми углами, размытыми тенями и стерильными гротесками приходит **Grand Luxe Modernism** — союз кураторского глянца (Vogue, Monocle, Kinfolk), архитектурного конструктивизма и элитарной музейной экспозиции.

### Ключевые столпы:
1. **Бескомпромиссная геометрия (Sharp Edges Only):** Полный отказ от скруглений (`border-radius: 0px`). Каждый блок — это огранённый монолит, архитектурная плита или ювелирный футляр.
2. **Власть антиквы (Serif Dominance):** Высококонтрастные засечки, каллиграфические росчерки курсива, классические пропорции римских капитальных надписей.
3. **Материалы и текстуры (Noble Materials):** Тёмный обсидиан, состаренная латунь, матовое шампанское, шёлковая слоновая кость, графит и благородная патина.
4. **Ювелирная сетка (Hairline Precision):** Сверхтонкие разделительные линии в 1px, имитирующие лазерную гравировку или металлические струны.
5. **Музейная драматургия контента:** Огромное количество воздуха (negative space), гигантские акцентные заголовки, миниатюрные серийные индексы и ощущение закрытого закрытого клуба исследователей.

---

## 2. ГЕОМЕТРИЯ И АРХИТЕКТУРА ФОРМ

```
+-------------------------------------------------------------+
| [№ 01]   ФИЗИКО-ЭНЕРГЕТИЧЕСКИЙ ИНСТИТУТ             [ 1946 ]|
|=============================================================|
|  /\  Острые углы (0px radius)                               |
| |||| Волосные линии (1px hairline border)                   |
|  \/  Четкие скосы, выверенная сетка, монолитные блоки       |
+-------------------------------------------------------------+
```

### 2.1. Правило нулевого радиуса
Никаких `border-radius: 4px / 8px / 9999px`.
```css
* {
  border-radius: 0 !important;
}
```
*Исключение:* Абсолютно круглые печати/штампы (`border-radius: 50%`), используемые исключительно как гербовые сургучные оттиски или визирные кольца на карте.

### 2.2. Архитектурные скосы и фаски (Cut Angles)
Для придания элементам сходства с гранёными кристаллами или броневыми пластинами применяются полигональные срезы:
```css
/* Угловой срез в стиле авангардного модернизма */
.luxe-facet {
  clip-path: polygon(
    0 0, 
    calc(100% - 16px) 0, 
    100% 16px, 
    100% 100%, 
    16px 100%, 
    0 calc(100% - 16px)
  );
}

/* Одинарный люксовый срез верхнего правого угла */
.luxe-tag-cut {
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
}
```

### 2.3. Волосные границы (Hairline Borders)
Границы блоков должны выглядеть как прецизионная лазерная насечка:
```css
--border-hairline: 1px solid rgba(212, 175, 55, 0.28); /* Шампанское/Латунь */
--border-subtle: 1px solid rgba(255, 255, 255, 0.08);   /* Глубокий графит */
--border-highlight: 1px solid #D4AF37;                 /* Чистое золото */
```

### 2.4. Паспарту и рамы (Passe-Partout Framing)
Изображения и важные документы оформляются с двойной музейной рамкой:
```css
.museum-frame {
  padding: 12px;
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border-gold);
  outline: 1px solid rgba(212, 175, 55, 0.15);
  outline-offset: 6px;
}
```

---

## 3. ТИПОГРАФИКА ВЫСОКОГО КЛАССА (HAUTE TYPOGRAPHIE)

Типографика — главный носитель премиальности. Сочетание контрастной антиквы для заголовков, благородной переходной гарнитуры для чтения и моноширинного кода для технических шифров.

```
       Cormorant Garamond / Playfair Display
       "НАУЧНЫЙ ПЕРЕДОВОЙ АВАНГАРД"
                     —
             Spectral / EB Garamond
      «История великих открытий атомного века»
                     —
          JetBrains Mono / Space Mono
          LAT: 55.0968° N | LON: 36.6111° E | CODE: FEI-1946
```

### 3.1. Шрифтовой стек
1. **Display & Headings (Заголовки, Акценты, Цитаты):**
   - Первичный: `'Cormorant Garamond', 'Playfair Display', 'Bodoni MT', 'Oranienbaum', serif`
   - Особенности: высокая контрастность штрихов, длинные засечки, грациозный наклонный курсив (*Italic*) с лигатурами.
2. **Body & Reading (Основной массив текста, аналитика):**
   - Первичный: `'Spectral', 'EB Garamond', 'Lora', serif`
   - Особенности: идеальная читаемость, глубокий книжный ритм, комфортный интерлиньяж (line-height: 1.65–1.8).
3. **Technical Metadata & Micro-labels (Координаты, даты, шифры, теги):**
   - Первичный: `'Space Mono', 'JetBrains Mono', monospace`
   - Особенности: имитация пишущей машинки, архивного штампа, лабораторных приборов.

### 3.2. Типографическая шкала и стили

| Уровень | Шрифт | Размер / Вес | Трекинг (Letter-spacing) | Регистр | Назначение |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | Cormorant Garamond | 56–72px / 300 Light | `0.06em` | Uppercase | Главный экран, титул |
| **Section H1** | Cormorant Garamond | 38–48px / 400 Regular | `0.04em` | Title Case | Названия институтов |
| **Editorial H2**| Playfair Display | 26–32px / 400 Italic | `0.02em` | Sentence case | Девизы, подзаголовки |
| **Subhead H3**  | Cormorant Garamond | 20–24px / 600 SemiBold| `0.08em` | Uppercase | Рубрики, разделы карточки |
| **Body Large**  | Spectral | 17–19px / 400 Regular | `0.01em` | Normal | Вводные абзацы, кураторский текст |
| **Body Regular**| Spectral | 15–16px / 400 Regular | `0.01em` | Normal | Основной текст статей |
| **Micro Index** | Space Mono | 10–12px / 500 Medium | `0.20em` | UPPERCASE | Архитектурные шифры, теги, даты |

### 3.3. Приёмы редакционной верстки
- **Буквицы (Drop Caps):** Первый символ главы оформляется крупной антиквой на 3 строки с золотым отливом.
- **Разряженный верхний регистр:** Заголовки в верхнем регистре ВСЕГДА имеют `letter-spacing: 0.12em` или выше. Слипшийся CAPS запрещён.
- **Шикарный курсив для акцента:** Чередование прямой антиквы и элегантного курсива внутри одного предложения:
  *Например:* **ПЕРВАЯ В МИРЕ** *Атомная Электростанция*.

---

## 4. ЦВЕТОВАЯ ПАЛИТРА «OBSIDIAN & BRASS»

Палитра вдохновлена интерьерами швейцарских часовых мануфактур, музейным мрамором и позолоченными научными приборами XIX–XX веков.

```
[ #090A0C ]  Obsidian Prime (Основной фон)
[ #121418 ]  Velvet Basalt (Поверхность карточек)
[ #1A1D24 ]  Graphite Monolith (Приподнятые слои)
[ #C5A880 ]  Champagne Brass (Благородное золото - акцент)
[ #DFC49C ]  Light Gold Sheen (Блик и фокус)
[ #EAE6DF ]  Alabaster Silk (Основной текст)
[ #9E9A91 ]  Muted Slate (Вторичный текст)
```

### 4.1. Спецификация HEX-кодов

#### Тёмная сторона (Dark Luxury — Primary):
- **`--bg-abyss` (`#070809`):** Глубокий космический обсидиан.
- **`--bg-surface` (`#101216`):** Базальтовая плита для панелей и подложек.
- **`--bg-elevated` (`#181B21`):** Активная поверхность карточек и модальных окон.
- **`--bg-highlight` (`#222630`):** Состояние наведения (hover) и выделенные зоны.

#### Металлы и Драгоценные Акценты:
- **`--gold-primary` (`#C5A880`):** Полированная латунь / теплое шампанское.
- **`--gold-bright` (`#E2C799`):** Световой блик, активные ссылки.
- **`--gold-dark` (`#8E734F`):** Теневая грань, приглушенные рамки.
- **`--gold-glow` (`rgba(197, 168, 128, 0.15)`): Едва уловимое золотое сияние.

#### Текст и Контраст:
- **`--text-primary` (`#F6F4EF`):** Шелковый алебастр (высочайшая читаемость, мягче стерильного белого).
- **`--text-secondary` (`#B8B4AC`):** Винтажная бумага / приглушенное серебро.
- **`--text-muted` (`#737069`):** Гранитная патина для технических меток.

#### Статусные цвета:
- **`--accent-atom` (`#4B7B9E`):** Глубокий кобальт (научные исследования).
- **`--accent-pulse` (`#A33B3B`):** Винный рубин (важные предупреждения, секретность).
- **`--accent-optics` (`#3B7D64`):** Изумрудный нефрит (технологии и экология).

---

## 5. БИБЛИОТЕКА КОМПОНЕНТОВ (UI KIT)

### 5.1. Кнопки (Architectural Monolith Buttons)
Кнопки не имеют теней размытия (blur), только чёткие контуры, инверсию цвета и мгновенную смену статуса.

```css
/* Кнопка 1: Главное действие (Solid Brass / Noir Text) */
.btn-luxury-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 28px;
  background: var(--gold-primary);
  color: #0A0B0D;
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  border: 1px solid var(--gold-primary);
  border-radius: 0;
  position: relative;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-luxury-primary:hover {
  background: transparent;
  color: var(--gold-primary);
  border-color: var(--gold-bright);
}

/* Кнопка 2: Вторичное действие (Outline Hairline) */
.btn-luxury-outline {
  padding: 13px 26px;
  background: transparent;
  color: var(--text-primary);
  font-family: 'Space Mono', monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 0;
  position: relative;
  cursor: pointer;
  transition: all 0.25s ease;
}

.btn-luxury-outline:hover {
  border-color: var(--gold-primary);
  color: var(--gold-primary);
  background: rgba(197, 168, 128, 0.05);
}
```

### 5.2. Угловые визирные метки (Target Corner Markers)
Люксовый элемент прецизионной оптики — металлические уголки по периметру блока:
```html
<div class="luxe-box">
  <span class="corner top-left"></span>
  <span class="corner top-right"></span>
  <span class="corner bottom-left"></span>
  <span class="corner bottom-right"></span>
  <!-- Контент -->
</div>
```
```css
.luxe-box {
  position: relative;
  padding: 32px;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
}

.luxe-box .corner {
  position: absolute;
  width: 8px;
  height: 8px;
  border-color: var(--gold-primary);
  border-style: solid;
  pointer-events: none;
}

.luxe-box .corner.top-left     { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
.luxe-box .corner.top-right    { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
.luxe-box .corner.bottom-left  { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }
.luxe-box .corner.bottom-right { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }
```

### 5.3. Карточки научных организаций (Monolith Exhibit Cards)
- Прямоугольная плита с темной текстурой.
- Верхний технический колонтитул: `[ ИНСТИТУТ № 01 ]` мелким моноширинным шрифтом.
- Название организации крупным Cormorant Garamond.
- Фотография в глубоких тонах (с эффектом серебряно-желатинового отпечатка или приглушенной сепии) с переходом в цвет при ховере.
- Тонкий разделитель в золотой градиент.

```css
.exhibit-card {
  border-radius: 0;
  background: var(--bg-surface);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 24px;
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.exhibit-card:hover {
  border-color: var(--gold-primary);
  transform: translateY(-2px);
}

.exhibit-card img {
  border-radius: 0;
  filter: grayscale(85%) contrast(110%);
  transition: filter 0.5s ease;
}

.exhibit-card:hover img {
  filter: grayscale(0%) contrast(100%);
}
```

### 5.4. Поле ввода и поиска (Architectural Search Bar)
Никаких округлых капсул. Строгая горизонтальная линия или прямоугольная рамка со шрифтом с засечками:
```css
.luxe-input {
  width: 100%;
  padding: 16px 20px;
  background: rgba(16, 18, 22, 0.85);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 0;
  color: var(--text-primary);
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  letter-spacing: 0.04em;
  outline: none;
  transition: border-color 0.3s ease, background 0.3s ease;
}

.luxe-input:focus {
  border-color: var(--gold-bright);
  background: #151820;
  box-shadow: inset 0 0 0 1px var(--gold-bright);
}

.luxe-input::placeholder {
  color: var(--text-muted);
  font-style: italic;
  font-family: 'Spectral', serif;
}
```

### 5.5. Чипы и фильтры (Archive Seals / Badges)
Строгие прямоугольные жетоны с моноширинным трекингом:
```css
.luxe-chip {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 0;
  font-family: 'Space Mono', monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid rgba(255, 255, 255, 0.12);
  cursor: pointer;
  transition: all 0.2s ease;
}

.luxe-chip.active,
.luxe-chip:hover {
  color: #0A0B0D;
  background: var(--gold-primary);
  border-color: var(--gold-primary);
  font-weight: 700;
}
```

---

## 6. КАРТОГРАФИЯ: СТИЛЬ «CARTIER & ASTRONOMICAL ATLAS»

Карта не должна выглядеть как стандартный цветной GPS-навигатор. Она переосмысливается как дорогой топографический атлас Российской Академии Наук или астрономическая карта:

1. **Подложка карты:**
   - Монохромная глубокая темная тема (Obsidian Monochrome) или благородный винтажный сатин.
   - Водоёмы: глубокий антрацит (`#0A0D12`).
   - Парки и леса: приглушенный сумеречный мох (`#0E1412`).
   - Дороги: тонкие нити серебра и бронзы (`#262A33`).
2. **Метки организаций на карте:**
   - Никаких круглых капель-пузырей ("pins").
   - Маркер — это **стоящий на углу ромб (Diamond)**, **золотой обелиск** или **тонкая визирная мишень** с гербовой буквой в центре (шрифт с засечками).
   ```css
   .luxe-map-marker {
     width: 30px;
     height: 30px;
     background: #0B0B0C;
     border: 1px solid #D4AF37;
     transform: rotate(45deg);
     display: flex;
     align-items: center;
     justify-content: center;
     box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
     transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s;
   }
   
   .luxe-map-marker span {
     transform: rotate(-45deg);
     font-family: 'Cormorant Garamond', serif;
     font-weight: 700;
     font-size: 14px;
     color: #D4AF37;
   }
   
   .luxe-map-marker:hover,
   .luxe-map-marker.active {
     background: #D4AF37;
     transform: rotate(45deg) scale(1.15);
   }
   
   .luxe-map-marker:hover span,
   .luxe-map-marker.active span {
     color: #0B0B0C;
   }
   ```
3. **Всплывающие окна (Popups):**
   - Строгая прямоугольная рамка.
   - Острый треугольный хвостик с прямыми углами.
   - Золотая окантовка и типографика с засечками.

---

## 7. КИНЕМАТИКА И МИКРОАНИМАЦИИ (LUXURY MOTION)

В люксовом дизайне анимация не прыгает и не пружинит («no cartoon bounces»). Движение степенное, тяжелое, шелковистое, как открытие дверей сейфа или движение швейцарского механизма.

### 7.1. Главная кривая ускорения
```css
--ease-luxury: cubic-bezier(0.16, 1, 0.3, 1);
--transition-snappy: 0.25s var(--ease-luxury);
--transition-stately: 0.6s var(--ease-luxury);
```

### 7.2. Эффект металлического отлива (Gold Sheen)
При наведении на карточки и кнопки по диагонали проходит деликатная световая грань:
```css
.luxe-shimmer {
  position: relative;
  overflow: hidden;
}

.luxe-shimmer::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    60deg,
    transparent 40%,
    rgba(212, 175, 55, 0.12) 50%,
    transparent 60%
  );
  transform: translateX(-100%);
  transition: transform 0.8s ease;
  pointer-events: none;
}

.luxe-shimmer:hover::after {
  transform: translateX(100%);
}
```

---

## 8. ГОТОВЫЙ CSS BOILERPLATE ДЛЯ ПОДКЛЮЧЕНИЯ В ПРОЕКТ

Ниже приведён готовый набор CSS-переменных и классов, готовый для вставки в `style.css` или отдельный файл `luxe.css`:

```css
/* ==========================================================================
   GRAND LUXE MODERNISM DESIGN SYSTEM TOKENS
   ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Spectral:ital,wght@0,300;0,400;0,500;1,400&display=swap');

:root {
  /* Базовые цвета фона */
  --lx-bg-abyss: #070809;
  --lx-bg-surface: #101216;
  --lx-bg-elevated: #171A21;
  --lx-bg-glass: rgba(16, 18, 22, 0.92);

  /* Цвета драгоценных металлов */
  --lx-gold-primary: #C5A880;
  --lx-gold-bright: #E4C89E;
  --lx-gold-dim: #7A664B;
  --lx-gold-line: rgba(197, 168, 128, 0.35);

  /* Текстовые оттенки */
  --lx-text-primary: #F7F5F0;
  --lx-text-secondary: #B5B1A8;
  --lx-text-muted: #6E6B65;

  /* Шрифты */
  --lx-font-display: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
  --lx-font-body: 'Spectral', Georgia, serif;
  --lx-font-mono: 'Space Mono', 'Courier New', monospace;

  /* Границы и геометрия */
  --lx-radius: 0px !important;
  --lx-border-hairline: 1px solid var(--lx-gold-line);
  --lx-border-subtle: 1px solid rgba(255, 255, 255, 0.08);

  /* Кинематика */
  --lx-ease: cubic-bezier(0.16, 1, 0.3, 1);
  --lx-transition: 0.3s var(--lx-ease);
}

/* Принудительная отмена скруглений */
*, *::before, *::after {
  border-radius: 0 !important;
}

/* Базовый ритм */
body {
  background-color: var(--lx-bg-abyss);
  color: var(--lx-text-primary);
  font-family: var(--lx-font-body);
  letter-spacing: 0.01em;
  line-height: 1.7;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--lx-font-display);
  font-weight: 400;
  color: var(--lx-text-primary);
  letter-spacing: 0.03em;
}

/* Золотая акцентная линия */
.lx-gold-rule {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--lx-gold-primary), transparent);
  border: none;
  margin: 32px 0;
}

/* Панель экспоната / модальное окно */
.lx-monolith-panel {
  background: var(--lx-bg-surface);
  border: var(--lx-border-hairline);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  padding: 32px;
}
```

---

## 9. ПРИНЦИПЫ ОФОРМЛЕНИЯ НАУЧНЫХ КАРТОЧЕК И КАТАЛОГА

1. **Нумерация в стиле архивных реестров:**
   Каждой научной организации присваивается монументальный архивный номер:
   - `РЕЕСТР № 01 — ФИЗИКО-ЭНЕРГЕТИЧЕСКИЙ ИНСТИТУТ`
   - `РЕЕСТР № 02 — ОНПП «ТЕХНОЛОГИЯ» ИМ. РОМАШИНА`
   - `РЕЕСТР № 03 — НПО «ТАЙФУН»`
   - `РЕЕСТР № 04 — НИФХИ ИМ. КАРПОВА`
2. **Геометрические координаты как арт-элемент:**
   Координаты института не прячутся в код, а выносятся наверх карточки в виде ювелирной гравировки:
   `LAT: 55°05′55″ N · LON: 36°36′30″ E · ВЫСОТА: 165M`
3. **Галерея в стиле фотопапки Christie’s:**
   Фотографии обрамлены в черные паспарту с тонкими золотыми уголками. При открытии на весь экран появляется черное бархатное полотно с утонченной подписью антиквой снизу.

---

## 10. ЧЕК-ЛИСТ ПРОВЕРКИ ПРЕМИУМ-ДИЗАЙНА (AUDIT)

- [ ] **Нет ли где-то случайных скруглений?** (Проверить все инпуты, кнопки, теги, модальные окна, картинки — радиус строго 0px).
- [ ] **Есть ли шрифты с засечками?** (Заголовки обязательно Cormorant / Playfair, цитаты курсивные, тексты набраны благородной книжной антиквой).
- [ ] **Используются ли латунь/золото в меру?** (Золото используется для линий толщиной 1px, акцентов, маркеров и активных состояний, не превращая сайт в дешевый «цыганский» китч).
- [ ] **Достаточно ли воздуха?** (Отступы увеличены на 20–30% относительно стандартных веб-сайтов).
- [ ] **Качественные ли изображения?** (Контрастность усилена, фото гармонируют с темным фоном).
- [ ] **Работают ли микродетали?** (Угловые засечки, визирные рамки, моноширинные архивные шифры).

*Разработано для проекта «Научный Обнинск» в эстетике Neo-Brutalist Luxury & Editorial Modernism.*
