/**
 * Calculates width of a grid element.
 *
 * Accepts an array of two numbers, the column size
 * and total number of columns (respectively).
 *
 * Uses the total columns to determine total width,
 * then multiplies by the column size to calculate
 * current column width.
 *
 * For example: a two column grid, with 50% wide columns,
 * would be an array of `[1,2]`. 2 total columns, with a
 * column taking up 1 of the 2 (so 50%). Same as `[3,6]`.
 *
 * @param {array} columns [Column size, Number of columns]
 */
const calculateGridWidth = columns => {
  if (columns) {
    return `width: ${(100 / columns[1]) * columns[0]}%;`;
  }
};

export default calculateGridWidth;
