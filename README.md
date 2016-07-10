# Soratra responsive — mixins for responsive typography Sass/Scss - 
##Mixin pour créer de la typography responsive en Sass/Scss.

* Note: Not tested with libSass and Sass < 3.4.

## Install
0. You need
  - Sass (v3.4.14) or +
  - Compass (v1.0.3) or +
  - Modular Scale (v2.1.1) or +

1. Clone `soratra responsive` somewhere to your project:

    ```sh
    https://github.com/thonymg/soratra-responsive.git
    ```
2. Include it in your main Scss file:

    ```Sass
    @import "tmg-soratra-responsive.scss";
    ```

## Config
Soratra-responsive use compass & modular-scale mixins, variables & function

See the compass & modular-scale documentation
http://compass-style.org/reference/compass/typography/vertical_rhythm/
http://www.modularscale.com/

#### Variables
  ```Sass
    // Modular scale variables
    $ms-base: 18px, 16px;
    $ms-ratio: 1.25;

    // Compass Vertical Rhythm variables
    $base-font-size: ms(0);//modular scale function
    $base-line-height: 18px;
    $rhythm-unit: "rem";
    $rem-with-px-fallback: true;
  ```

## Use

One thing




3. Simple exemple:

    ```Sass
    .block1{
      @include e(element1){
        content: "element 1";

        @include m(modifier1){
          content: "modifier 1";
        }
      }
    }

    ```

    would render to something like

    ```Css
    .block1__element1 {
          content: "element 1";
    }
    .block1__element1--modifier1 {
      content: "modifier 1";
    }
    ```

## The nesting

1. .block3 inside .block2 and .element2

    ```Sass
    .block1{
      @include e(element1){
        content: "element 1";
        .block2{
          @include e(element2){
            content: "element 2";

            @include m(modifier2){
              content: "modifier 2";
            }

            .block3{
              @include e(element3){
                content: "element 2";

                @include m(modifier3){
                  content: "modifier 2";
                }
              }
            }
          }
        }
      }
    }
    ```

    would render to something like

    ```Css
    .block1__element1 {
      content: "element 1";
    }
    .block2__element2 {
      content: "element 2";
    }
    .block2__element2--modifier2 {
      content: "modifier 2";
    }
    .block3__element3 {
      content: "element 2";
    }
    .block3__element3--modifier3 {
      content: "modifier 2";
    }
    ```

2. .block3 inside block2 but not inside .element2

    ```Sass
    .block1{
      @include e(element1){
        content: "element 1";
        .block2{
          @include e(element2){
            content: "element 2";

            @include m(modifier2){
              content: "modifier 2";
            }
          }
            .block3{
              @include e(element3){
                content: "element 3";

                @include m(modifier3){
                  content: "modifier 3";
                }
              }
            }

        }
      }
    }
    ```

    would render to something like

    ```Css
    .block1__element1 {
      content: "element 1";
    }
    .block2__element2 {
      content: "element 2";
    }
    .block2__element2--modifier2 {
      content: "modifier 2";
    }
    .block2 .block3__element3 {
      content: "element 3";
    }
    .block2 .block3__element3--modifier3 {
      content: "modifier 3";
    }

    ```

3. With @media query

    ```Sass
    .block1{
      @include e(element1){
        content: "element 1";

        @media screen and (min-width: 40em) {
          .block2{
            @include e(element2){
              content: "element 2";

              @include m(modifier2){
                content: "modifier 2";
              }

              .block3{
                @include e(element3){
                  content: "element 3";

                  @include m(modifier3){
                    content: "modifier 3";
                  }
                }
              }
            }
          }
        }
      }
    }  
    ```

    would render to something like

    ```Css
    .block1__element1 {
      content: "element 1";
    }

    @media screen and (min-width: 40em) {
      .block2__element2 {
        content: "element 2";
      }
      .block2__element2--modifier2 {
        content: "modifier 2";
      }
      .block3__element3 {
        content: "element 3";
      }
      .block3__element3--modifier3 {
        content: "modifier 3";
      }
    }

    ```

4. With @media query and .block3 outside .element2

    ```Sass
    .block1{
      @include e(element1){
        content: "element 1";

        @media screen and (min-width: 40em) {
          .block2{
            @include e(element2){
              content: "element 2";

              @include m(modifier2){
                content: "modifier 2";
              }
            }

              .block3{
                @include e(element3){
                  content: "element 3";

                  @include m(modifier3){
                    content: "modifier 3";
                  }
                }
              }

          }
        }
      }
    }  
    ```

    would render to something like

    ```Css
    .block1__element1 {
      content: "element 1";
    }
    @media screen and (min-width: 40em) {
      .block2__element2 {
        content: "element 2";
      }
      .block2__element2--modifier2 {
        content: "modifier 2";
      }
      .block2 .block3__element3 {
        content: "element 3";
      }
      .block2 .block3__element3--modifier3 {
        content: "modifier 3";
      }
    }
    ```

## The 2nd Parameter

###If you need inception. Add 'false' to the 2nd parameter of the @mixin element

1. .block3 inside .block2 and .element2

    ```Sass
     .block1{
      @include e(element1){
        content: "element 1";
          .block2{
            @include e(element2, false){
              content: "element 2";              
              @include m(modifier2){
                content: "modifier 2";
              }

              .block3{
                @include e(element3){
                  content: "element 3";                  
                  @include m(modifier3){
                    content: "modifier 3";
                  }
                }
              }            
          }
        }
      }
    }
    ```


    would render to something like

    ```Css
    .block1__element1 {
      content: "element 1";
    }
    .block1__element1 .block2__element2 {
      content: "element 2";
    }
    .block1__element1 .block2__element2--modifier2 {
      content: "modifier 2";
    }
    .block2__element2 .block3__element3 {
      content: "element 3";
    }
    .block2__element2 .block3__element3--modifier3 {
      content: "modifier 3";
    }
    }
    ```


2. .block3 inside block2 but not inside .element2

    ```Sass
    .block1{
      @include e(element1){
        content: "element 1";
          .block2{
            @include e(element2, false){
              content: "element 2";              
              @include m(modifier2){
                content: "modifier 2";
              }
            }            
            .block3{
              @include e(element3){
                content: "element 3";                  
                @include m(modifier3){
                  content: "modifier 3";
                }
              }
            }            

        }
      }
    }
    ```


    would render to something like

    ```Css
    .block1__element1 {
      content: "element 1";
    }
    .block1__element1 .block2__element2 {
      content: "element 2";
    }
    .block1__element1 .block2__element2--modifier2 {
      content: "modifier 2";
    }
    .block2 .block3__element3 {
      content: "element 3";
    }
    .block2 .block3__element3--modifier3 {
      content: "modifier 3";
    }

    ```

    - - -

more mixins soon !!!!

Je suis un peuple d'Anosibe. [follow Anosibe on twitter](https://twitter.com/anosibe/).
Or [follow me on twitter](https://twitter.com/thonyMg/).

* Paix et guérrisons pour les tiens.

- - -
