### Default Table

To create an HTML table with Pure CSS styling, use the `<Table>` component. This component adds padding and borders to table elements, and emphasizes the header.

```js
<Table>
  <thead>
    <tr>
      <td>Title</td>
      <td>Title</td>
      <td>Title</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hello Table</td>
      <td>Hello Table</td>
      <td>Hello Table</td>
    </tr>
    <tr>
      <td>Hello Table</td>
      <td>Hello Table</td>
      <td>Hello Table</td>
    </tr>
  </tbody>
</Table>
```

### Bordered Table

To add horizontal and vertical borders to all cells, add the bordered prop to the `<Table>` element.

```js
<Table bordered>
  <thead>
    <tr>
      <td>Title</td>
      <td>Title</td>
      <td>Title</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hello Table</td>
      <td>Hello Table</td>
      <td>Hello Table</td>
    </tr>
    <tr>
      <td>Hello Table</td>
      <td>Hello Table</td>
      <td>Hello Table</td>
    </tr>
  </tbody>
</Table>
```

### Table with Horizontal Borders

If you prefer horizontal lines only, add the horizontal prop to the `<Table>` element.

```js
<Table horizontal>
  <thead>
    <tr>
      <td>Title</td>
      <td>Title</td>
      <td>Title</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hello Table</td>
      <td>Hello Table</td>
      <td>Hello Table</td>
    </tr>
    <tr>
      <td>Hello Table</td>
      <td>Hello Table</td>
      <td>Hello Table</td>
    </tr>
  </tbody>
</Table>
```

### Striped Table

Large tables are easier to parse visually if rows are easily distinguishable. Adding the `.odd` class name to every other `<tr>` element changes the background of the row and creates a zebra-styled effect.

Note: In browsers which support the CSS3 nth-child pseudo selector a simpler approach can be used. The striped prop can be added to the `<Table>` component and the zebra-styled striping will happen automatically. This approach will not work in Internet Explorer 8 or lower.

```js
<Table striped>
  <thead>
    <tr>
      <td>Title</td>
      <td>Title</td>
      <td>Title</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hello Table</td>
      <td>Hello Table</td>
      <td>Hello Table</td>
    </tr>
    <tr>
      <td>Hello Table</td>
      <td>Hello Table</td>
      <td>Hello Table</td>
    </tr>
  </tbody>
</Table>
```
