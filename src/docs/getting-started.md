# Get Started

## Start your next web project with Pure.

### Add Pure to Your Page

You can add Pure to your page via the free unpkg CDN. Just add the following <link> element into your page's <head>, before your project's stylesheets.

```html static
<link
  rel="stylesheet" 
  href="https://unpkg.com/purecss@1.0.0/build/pure-min.css"
  integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w"
  crossorigin="anonymous"
>
```

> Alternatively, you can download Pure, or check out other CDNs that host Pure.

### Add the Viewport Meta Element

The viewport `meta` element lets you control the the width and scale of the viewport on mobile browsers. Since you're building a responsive website, you want the width to be equal to the device's native width. Add this into your page's `<head>`.

### Understand Pure Grids

Pure's grid system is very simple. You create a row by using the `<Grid></Grid>` component, and create columns within that row by using the <Grid.Unit width={[1/2]}></Grid.Unit>`.

Here's a grid with three columns:

```js static
<Grid>
  <Grid.Unit width={[1 / 3]}>
    <p>Thirds</p>
  </Grid.Unit>
  <Grid.Unit width={[1 / 3]}>
    <p>Thirds</p>
  </Grid.Unit>
  <Grid.Unit width={[1 / 3]}>
    <p>Thirds</p>
  </Grid.Unit>
</Grid>
```

### Responsive Grids

Pure's grid system is also mobile-first and responsive, and you're able to customize the grid by specifying CSS Media Query breakpoints and grid classnames. If needed, you can customize Pure Grids below, but let's start off with an example.

Here's the default responsive breakpoints included in `grids-responsive.css`:

```js static
// width `50%`
<Box width={1/2} />

// width `256px`
<Box width={256} />

// width `'2em'`
<Box width='2em' />

// width `100%` on all viewports and `50%` from the smallest breakpoint and up
<Box width={[ 1, 1/2 ]} />

// width `50%` on all viewports, `100%` from the smallest(phone),
// `25%` from tablet, and `12.5%` for desktop breakpoint and up
<Box width={[ 1/2, 1, 1/4, 1/8 ]} />
```

Here's an example of what you'd be able to do. _Try resizing your screen to see how the grid responds._

```js static
<Grid>
  <Grid.Unit>.pure-u-1</Grid.Unit>
  <Grid.Unit width={[1, 1 / 2, 1 / 4]}>
    .pure-u-1
    <br />
    .pure-u-md-1-2
    <br />
    .pure-u-lg-1-4
  </Grid.Unit>
  <Grid.Unit width={[1, 1 / 2, 1 / 4]}>
    .pure-u-1
    <br />
    .pure-u-md-1-2
    <br />
    .pure-u-lg-1-4
  </Grid.Unit>
  <Grid.Unit width={[1, 1 / 2, 1 / 4]}>
    .pure-u-1
    <br />
    .pure-u-md-1-2
    <br />
    .pure-u-lg-1-4
  </Grid.Unit>
  <Grid.Unit width={[1, 1 / 2, 1 / 4]}>
    .pure-u-1
    <br />
    .pure-u-md-1-2
    <br />
    .pure-u-lg-1-4
  </Grid.Unit>
  <Grid.Unit width={[1, 3 / 4]}>
    .pure-u-1
    <br />
    .pure-u-md-3-4
  </Grid.Unit>
  <Grid.Unit width={[1, 1 / 4]}>
    .pure-u-1
    <br />
    .pure-u-md-1-4
  </Grid.Unit>
</Grid>
```
