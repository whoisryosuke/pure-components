## Default Buttons

To create a Pure Button, add the `pure-button` classname to any `<a>` or `<button>` element.

```js
<Button>Hello Button</Button>
```

## Disabled Buttons

To mark a button as disabled, add the `pure-button-disabled` classname alongside `pure-button`. Alternatively, add the "disabled" attribute directly to your button.

A Disabled Button A Disabled Button

```js
<Button disabled>Hello Button</Button>
```

## Active Buttons

To style a button so that it appears "pressed", add the `pure-button-active` classname alongside `pure-button`.

[An Active Button](https://purecss.io/buttons/#) An Active Button

```js
<Button active>Hello Button</Button>
```

## Primary Buttons

To indicate that a button represents a primary action, add the `pure-button-primary` classname alongside `pure-button`.

[A Primary Button](https://purecss.io/buttons/#) A Primary Button

```js
<Button primary>Hello Button</Button>
```

## Customizing Buttons

Thanks to Pure's minimal styling, it is easy to build off of the generic Pure button and create customized buttons for your own application.

To customize button styles, you should group your custom CSS into a class such as `button-foo`, which you can then add to an element that already has the `pure-button` classname. Here are some examples.

### Colored buttons with rounded corners

```js
<div>
  <Button
    style={{
      background: "rgb(28, 184, 65)",
      color: "white",
      borderRadius: "4px",
      textShadow: "0 1px 1px rgba(0, 0, 0, 0.2);"
    }}
  >
    Success Button
  </Button>
  <Button
    style={{
      background: "rgb(202, 60, 60)",
      color: "white",
      borderRadius: "4px",
      textShadow: "0 1px 1px rgba(0, 0, 0, 0.2);"
    }}
  >
    Error Button
  </Button>
  <Button
    style={{
      background: "rgb(223, 117, 20)",
      color: "white",
      borderRadius: "4px",
      textShadow: "0 1px 1px rgba(0, 0, 0, 0.2);"
    }}
  >
    Warning Button
  </Button>
  <Button
    style={{
      background: "rgb(66, 184, 221)",
      color: "white",
      borderRadius: "4px",
      textShadow: "0 1px 1px rgba(0, 0, 0, 0.2);"
    }}
  >
    Secondary Button
  </Button>
</div>
```

### Buttons with different sizes

```js
<div>
  <Button style={{ fontSize: "70%" }}>Extra Small Button</Button>
  <Button style={{ fontSize: "85%" }}>Small Button</Button>
  <Button>Regular Button</Button>
  <Button style={{ fontSize: "110%" }}>Large Button</Button>
  <Button style={{ fontSize: "125%" }}>Extra Large Button</Button>
</div>
```

### Buttons with icons

Pure doesn't ship with icon fonts, but we play nice with existing ones. Incorporating icon fonts with Pure Buttons is easy. In the example below, we're using icon fonts from [Font Awesome](http://fortawesome.github.io/Font-Awesome/). Put the [Font Awesome CSS file](http://fortawesome.github.io/Font-Awesome/get-started/) on your page and use an `<i>` element within a `pure-button` element.

```js
<Button>
  <i class="fa fa-cog" />
  Hello Button
</Button>
```

## Button Groups[](https://purecss.io/buttons/#button-groups "Heading anchor")

Group multiple buttons together on a single line.

For assistive technologies (i.e, screen readers) a `role` attribute should be provided to ensure that proper meaning is conveyed. Button groups should have a `role="group"`, while toolbars should have `role="toolbar"`.

Additionally, a clear label should be provided since most assistive technologies will not announce them. The code snippet below provides an example.

```js
<Button.Group>
  <Button>Hello Button</Button>
  <Button>Hello Button</Button>
  <Button>Hello Button</Button>
</Button.Group>
```
