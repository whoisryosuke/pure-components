Pure CSS and React Grid.

Creates a grid using any wrapped <Grid.Unit> components. This is purely a Flexbox wrapper for the "units", which define their own width.

## Introduction to Pure Grids

Pure Grids are easy to work with, and very powerful. There are a few simple concepts to keep in mind:

### Grid classes vs. unit classes

Pure Grids consist of two types of classes: the grid class (pure-g) and unit classes (pure-u or pure-u-\*)

### The widths of the units are fractions

Units have various class names that represent their widths. For example, pure-u-1-2 has a width of 50%, whereas pure-u-1-5 would have a width of 20%.

### All child elements of a grid must be units

Child elements contained within an element with a pure-g classname must be a grid unit with a pure-u or pure-u-\* classname.

### Content goes inside grid units

All content which is visible to people needs to be contained inside a grid unit. This ensures that the content will be rendered properly.

Let's start with a simple example. Here's a grid with three columns:

```js
<Grid>
  <Grid.Unit columns={[1, 3]}>Thirds</Grid.Unit>
  <Grid.Unit columns={[1, 3]}>Thirds</Grid.Unit>
  <Grid.Unit columns={[1, 3]}>Thirds</Grid.Unit>
</Grid>
```

## Grids Units Sizes

Pure CSS ships with both a 5ths and 24ths based grid, but this library allows for any type of grid (thanks to the dynamic nature of CSS in JS - like SASS preprocessing on command). Depicted below are some examples of available units that can be created using the columns prop by providing an array of the column size (relative to the total size) and the total columns respectively. For example the unit columns prop for 50% width is: `[1,2]`.

### 5ths-Based Units

```js
<Grid>
  <Grid.Unit columns={[2, 24]}>1, 5</Grid.Unit>
  <Grid.Unit columns={[22, 24]}>
    <span style={{ display: "block", border: "1px solid #CCC" }}>
      <Grid>
        <Grid.Unit columns={[1, 5]}>
          <a
            style={{
              display: "block",
              background: "#CCC",
              textIndent: "-900em"
            }}
          >
            Grid Unit
          </a>
        </Grid.Unit>
      </Grid>
    </span>
  </Grid.Unit>
  <Grid.Unit columns={[2, 24]}>4, 5</Grid.Unit>
  <Grid.Unit columns={[22, 24]}>
    <span style={{ display: "block", border: "1px solid #CCC" }}>
      <Grid>
        <Grid.Unit columns={[4, 5]}>
          <a
            style={{
              display: "block",
              background: "#CCC",
              textIndent: "-900em"
            }}
          >
            Grid Unit
          </a>
        </Grid.Unit>
      </Grid>
    </span>
  </Grid.Unit>
  <Grid.Unit columns={[2, 24]}>1, 24</Grid.Unit>
  <Grid.Unit columns={[22, 24]}>
    <span style={{ display: "block", border: "1px solid #CCC" }}>
      <Grid>
        <Grid.Unit columns={[1, 24]}>
          <a
            style={{
              display: "block",
              background: "#CCC",
              textIndent: "-900em"
            }}
          >
            Grid Unit
          </a>
        </Grid.Unit>
      </Grid>
    </span>
  </Grid.Unit>
  <Grid.Unit columns={[2, 24]}>5, 24</Grid.Unit>
  <Grid.Unit columns={[22, 24]}>
    <span style={{ display: "block", border: "1px solid #CCC" }}>
      <Grid>
        <Grid.Unit columns={[5, 24]}>
          <a
            style={{
              display: "block",
              background: "#CCC",
              textIndent: "-900em"
            }}
          >
            Grid Unit
          </a>
        </Grid.Unit>
      </Grid>
    </span>
  </Grid.Unit>
  <Grid.Unit columns={[2, 24]}>1, 36</Grid.Unit>
  <Grid.Unit columns={[22, 24]}>
    <span style={{ display: "block", border: "1px solid #CCC" }}>
      <Grid>
        <Grid.Unit columns={[1, 36]}>
          <a
            style={{
              display: "block",
              background: "#CCC",
              textIndent: "-900em"
            }}
          >
            Grid Unit
          </a>
        </Grid.Unit>
      </Grid>
    </span>
  </Grid.Unit>
  <Grid.Unit columns={[2, 24]}>10, 36</Grid.Unit>
  <Grid.Unit columns={[22, 24]}>
    <span style={{ display: "block", border: "1px solid #CCC" }}>
      <Grid>
        <Grid.Unit columns={[10, 36]}>
          <a
            style={{
              display: "block",
              background: "#CCC",
              textIndent: "-900em"
            }}
          >
            Grid Unit
          </a>
        </Grid.Unit>
      </Grid>
    </span>
  </Grid.Unit>
</Grid>
```
