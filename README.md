# Soratra responsive — mixins for responsive typography Sass/Scss -
##Mixin pour créer de la typography responsive en Sass/Scss.

* Note: Not tested with libSass and Sass < 3.4.

## Install
0. You need
  - Sass (v3.4.14) or +
  - Compass (v1.0.3) or +
  - Modular Scale (v2.1.1) or +

1. Clone `soratra-responsive` somewhere to your project:

    ```sh
    https://github.com/thonymg/soratra-responsive.git
    ```
2. Include it in your main Scss file:

    ```Sass
    @import "tmg-soratra-responsive.scss";
    ```

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

[Demo](http://www.sassmeister.com/gist/756b142d9fe22a4d211c116fbf9a51ef)

the first option corespond to modular-scale $ms-base variable used in h6 selector, soratra-responsive automaticaly calculate each other heading size

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

- - -
### other documentation
See the [compass](http://www.modularscale.com/) & [modular-scale](http://compass-style.org/reference/compass/typography/vertical_rhythm/) documentation


Je suis un peuple d'Anosibe. [follow Anosibe on twitter](https://twitter.com/anosibe/).
Or [follow me on twitter](https://twitter.com/thonyMg/).

* Paix et guérrisons pour les tiens.
