Leveraging Normalize.css, an HTML5-ready alternative to CSS resets.

### The Foundation

All modules in Pure build on top of Normalize.css. It's our foundational layer to maintain some degree of cross-browser consistency. Normalize.css is included with this library and is added globally using Styled Components when you wrap your app in this component.

You can pull in Normalize.css and other defaults by adding this `<Base>` component to your app:

```js
<Base>
  <Button>Download jams</Button>
</Base>
```

##### A bit about Normalize.css

[Normalize.css](https://necolas.github.io/normalize.css/) is an open-source project by [Nicolas Gallagher](http://twitter.com/necolas) and [Jonathan Neal](http://twitter.com/jon_neal). [In their own words](http://nicolasgallagher.com/about-normalize-css/):

> Normalize.css is a small CSS file that provides better cross-browser consistency in the default styling of HTML elements. It’s a modern, HTML5-ready, alternative to the traditional CSS reset."

Normalize.css comes with [great documentation](https://github.com/necolas/normalize.css/wiki) and a [thorough guide](http://nicolasgallagher.com/about-normalize-css/) explaining how it differs from a traditional reset. You can also check out YUI's [CSSNormalize](http://yuilibrary.com/yui/docs/cssnormalize/) module, which includes the generic Normalize along with a [contextual version](http://yuilibrary.com/yui/docs/cssnormalize/#context). The contextual version of Normalize only applies normalized styles to elements that are children of an element with the class name `yui3-normalized`.

### Extras

In addition to Normalize.css rules, Pure's Base module contains some common styles that are used by most websites.

##### Hiding Elements

Add the `hidden` attribute to an HTML element to hide it from the screen via `display: none !important;`. Alternatively, for compatibility with old IE, you may use the CSS classname `.hidden`.

    <input type="text" name="_csrf" hidden>

##### Responsive Images

Add the `.pure-img` class name to an `<img>` element to make it scale with the viewport. This is handy when building responsive websites.

    <img class="pure-img" src="...">

### Moving beyond Normalize

Normalize.css is a great starting place for your project, but some HTML elements such as forms, tables, and menus require more styling than what's provided by Normalize.

We made a more opinionated look and feel for these elements, while keeping them minimal enough so that you can customize them for your site or app's needs. Check out our docs for [Forms](#forms/), [Tables](#tables/), and [Menus](#menus/).
