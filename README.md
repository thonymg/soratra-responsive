# Soratra responsive — Tools for responsive typography in Sass/Scss

## Install

0. You need

- Sass (v3.4.14) or +

1. Clone `soratra` somewhere to your project:

   ```sh
   https://github.com/thonymg/soratra-responsive.git
   ```

2. Include it in your main Scss file:

   ```Sass
   @import "soratra.scss";
   ```

### Installing with npm and using a Node-based asset pipeline

1. Add Soratra as a dependency:

   ```bash
   npm install --save soratra
   ```

1. If you’re using [eyeglass], skip to Step 3. Otherwise, you’ll need to add
   Soratra to your node-sass `includePaths` option.
   `require("soratra").includePaths` is an array of directories that you should
   pass to node-sass. How you do this depends on how node-sass is integrated
   into your project.

1. Import Soratra into your Sass files:

   ```scss
   @import "soratra";
   ```

[eyeglass]: https://github.com/sass-eyeglass/eyeglass

## Config

Soratra-responsive use compass & modular-scale mixins, variables & function.

you can use different modular-scale configuration for each device.

```Sass
  // Modular scale variables

  $tmg-mobile-ms : 13px 14px, $octave;
  $tmg-tablette-ms : 14px 16px, $octave;
  $tmg-desktop-ms : 16px 18px, 1.25;
  $tmg-large-ms : 18px, 1.25;
  $tmg-x-large-ms : 18px, 1.25;
```

you can configure the compass vertical rhythm.

```Sass
  // Compass Vertical Rhythm variables

  $base-line-height : 24px;
  $rhythm-unit : "rem";
  $rem-with-px-fallback : true;
```

### config

The first option corespond to modular-scale \$ms-base variable used in h6 selector, soratra-responsive automaticaly calculate each other heading size

```Sass
  $tmg-mobile-ms : 13px;
```

the second option corespond to modular scale $ms-ratio. By defaut soratra-responsive use $golden if any option is passed

```Sass
  $tmg-mobile-ms : 13px, $golden;
```

the third option corespond to modular-scale starting point. generaly you don't have to change the default value. By default soratra-responsive starts at 6 (the modular-scale starting count) and decrement this value.

```Sass
  $tmg-mobile-ms : 13px, $golden, 8;
```

### use

for the responsive typography

```Sass
  @include tmg-base-vertical-rhythm();
```

Mixins for easy heading style

```Sass
  @include tmg-base-heading-style(){
    color: red;
  }
```

Mixins for easy heading style with a selector

```Sass
  @include tmg-select-heading-style(".truc"){
    color: blue;
  }
```

Mixins for easy block container style with selector

```Sass
  @include tmg-others-block-container(".foo"){
  	color: green
  }
```

### my other project

my library for advanced [bem selector](https://github.com/thonymg/fotsy-sass-bem)

### alternative

other library for [responsive typography](https://github.com/corysimmons/typographic)

---

### other documentation

See the [modular-scale](http://www.modularscale.com/) & [compass](http://compass-style.org/reference/compass/typography/vertical_rhythm/) documentation

Je suis un peuple d'Anosibe. [follow Anosibe on twitter](https://twitter.com/anosibe/).
Or [follow me on twitter](https://twitter.com/thonyMg/).

---

Paix et Guerisons - with 💘 [Thony](https://github.com/thonymg)
