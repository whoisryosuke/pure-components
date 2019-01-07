# ![Pure](https://raw.githubusercontent.com/whoisryosuke/pure-components/master/images/logo-pure-js.jpg)

## A set of small, responsive CSS modules that you can use in every web project.

### CSS with a minimal footprint.

Pure is ridiculously tiny. The entire set of modules clocks in at **3.8KB\* minified and gzipped**. Crafted with mobile devices in mind, it was important to us to keep our file sizes small, and every line of CSS was carefully considered. If you decide to only use a subset of these modules, you'll save even more bytes.

```js
<Grid>
  <Grid.Unit width={[1 / 3]}>
    <h4>Your CSS foundation.</h4>
    <p>
      Pure builds on Normalize.css and provides layout and styling for native
      HTML elements, plus the most common UI components. It's what you need,
      without the cruft.
    </p>
  </Grid.Unit>

  <Grid.Unit width={[1 / 3]}>
    <h4>Made with mobile in mind.</h4>
    <p>
      Pure is responsive out of the box, so elements look great on all screen
      sizes.
    </p>
  </Grid.Unit>

  <Grid.Unit width={[1 / 3]}>
    <h4>Stays out of your way.</h4>
    <p>
      Pure has minimal styles and encourages you to write your application
      styles on top of it. It's designed to get out of your way and makes it
      easy to override styles.
    </p>
  </Grid.Unit>

  <Grid.Unit width={[1 / 2]}>
    <img
      src="https://purecss.io/img/layout-icon.jpg"
      width="90%"
      style={{ margin: "auto" }}
    />
  </Grid.Unit>
  <Grid.Unit width={[1 / 2]}>
    <h4>Create responsive layouts.</h4>

    <p>
      By using [Grids](https://purecss.io/grids/),
      [Menus](https://purecss.io/menus/), and more, it's easy to create
      beautiful responsive layouts for all screen sizes. We've made it easy for
      you to get started. Take a look at a few different
      [layouts](https://purecss.io/layouts/) and start your next web project
      with a rock-solid foundation.
    </p>
    <Button as="a" href="#">
      View layouts
    </Button>
  </Grid.Unit>

  <Grid.Unit width={[1 / 2]}>
    <h4>Create your own look and feel.</h4>

    <p>
      Unlike other frameworks, Pure's design is unopinionated, minimal and flat.
      We believe that it's much easier to add new CSS rules than to overwrite
      existing rules. By adding a few lines of CSS, you can customize Pure's
      appearance to work with your web project.
    </p>
    <Button as="a" href="#" primary>
      Extend Pure
    </Button>
  </Grid.Unit>
  <Grid.Unit width={[1 / 2]}>
    <Grid.Unit width={[1 / 3]}>
      <Button width={[1]}>Default</Button>
    </Grid.Unit>
    <Grid.Unit width={[1 / 3]}>
      <Button width={[1]} primary>
        Primary
      </Button>
    </Grid.Unit>
    <Grid.Unit width={[1 / 3]}>
      <Button width={[1]} bg="yellow">
        Yellow
      </Button>
    </Grid.Unit>

    <Grid.Unit width={[1 / 3]}>
      <Button width={[1]} bg="black" color="white" rounded>
        Black
      </Button>
    </Grid.Unit>
    <Grid.Unit width={[1 / 3]}>
      <Button width={[1]} bg="green" rounded>
        Green
      </Button>
    </Grid.Unit>
    <Grid.Unit width={[1 / 3]}>
      <Button width={[1]} bg="red" rounded>
        Red
      </Button>
    </Grid.Unit>

    <Grid.Unit width={[1 / 3]}>
      <Button width={[1]} bg="purple" color="white">
        Purple
      </Button>
    </Grid.Unit>
    <Grid.Unit width={[1 / 3]}>
      <Button width={[1]} bg="orange">
        Orange
      </Button>
    </Grid.Unit>
    <Grid.Unit width={[1 / 3]}>
      <Button width={[1]} bg="indigo" color="white">
        Indigo
      </Button>
    </Grid.Unit>
  </Grid.Unit>
</Grid>
```
