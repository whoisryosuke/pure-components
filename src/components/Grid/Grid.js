import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import findByType from "../../utils/findByType";

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
const generateGrid = columns => {
  if (columns) {
    return `width: ${(100 / columns[1]) * columns[0]}%;`;
  }
};

/**
 * Grid Unit
 * Creates a "unit" inside of the grid.
 * Comparable to a column in Bootstrap or cell in a spreadsheet.
 *
 * @param {object} {className, children}
 */
const GridUnit = ({ className, children }) => (
  <div className={className}>{children}</div>
);

GridUnit.propTypes = {
  /**
   * Array of two numbers, the column size
   * and total number of columns (respectively).
   *
   * See <Grid.Unit> component for more info.
   */
  columns: PropTypes.array.isRequired,

  /**
   * Child components (array or single element)
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const Unit = styled(GridUnit)`
  ${props => generateGrid(props.columns)} display: inline-block;
  *display: inline; /* IE < 8: fake inline-block */
  zoom: 1;
  letter-spacing: normal;
  word-spacing: normal;
  vertical-align: top;
  text-rendering: auto;
`;

/**
 * Grid
 * Creates a grid using any wrapped <Grid.Unit> components.
 * This is purely a Flexbox wrapper for the "units", which
 * define their own width.
 *
 * @param {object} {className: string, children: node || array(node)}
 */
class Grid extends PureComponent {
  renderHeading() {
    const { children } = this.props;
    // First we try to find the Heading sub-component among the children of Article
    const title = findByType(children, Heading);
    // If we don’t find any we return null
    if (!title || title.length == 0) {
      return null;
    }
    // Else we return the children of the Heading sub-component as wanted
    return <Heading className="heading">{title[0].props.children}</Heading>;
  }

  renderUnits() {
    const { children } = this.props;
    const units = findByType(children, Unit);
    // // Check if is array, if not, check if it single element
    // if (!units.isArray()) {
    //   if (units.length == 0) {
    //     return units;
    //   }
    //   return null;
    // }
    const items = units.map(item => (
      <Unit key={item.props.children} {...item.props}>
        {item.props.children}
      </Unit>
    ));
    if (!items) {
      return null;
    }
    return items;
  }

  render() {
    return <nav className={this.props.className}>{this.renderUnits()}</nav>;
  }
}

Grid.propTypes = {
  /**
   * Child components (array or single element)
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

Grid.Unit = Unit;

const StyledGrid = styled(Grid)`
  letter-spacing: -0.31em; /* Webkit: collapse white-space between units */
  *letter-spacing: normal; /* reset IE < 8 */
  *word-spacing: -0.43em; /* IE < 8: collapse white-space between units */
  text-rendering: optimizespeed; /* Webkit: fixes text-rendering: optimizeLegibility */

  /*
  Sets the font stack to fonts known to work properly with the above letter
  and word spacings. See: https://github.com/pure-css/pure/issues/41/
  The following font stack makes Pure Grids work on all known environments.
  * FreeSans: Ships with many Linux distros, including Ubuntu
  * Arimo: Ships with Chrome OS. Arimo has to be defined before Helvetica and
    Arial to get picked up by the browser, even though neither is available
    in Chrome OS.
  * Droid Sans: Ships with all versions of Android.
  * Helvetica, Arial, sans-serif: Common font stack on OS X and Windows.
  */
  font-family: FreeSans, Arimo, "Droid Sans", Helvetica, Arial, sans-serif;

  /* Use flexbox when possible to avoid 'letter-spacing' side-effects. */
  display: flex;
  flex-flow: row wrap;

  /* Prevents distributing space between rows */
  align-content: flex-start;

  /* IE10 display: -ms-flexbox (and display: flex in IE 11) does not work inside a table; fall back to block and rely on font hack */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    table .pure-g {
      display: block;
    }
  }

  /* Opera as of 12 on Windows needs word-spacing.
   The ".opera-only" selector is used to prevent actual prefocus styling
   and is not required in markup.
*/
  .opera-only :-o-prefocus,
  & {
    word-spacing: -0.43em;
  }
  /*
Resets the font family back to the OS/browser's default sans-serif font,
this the same font stack that Normalize.css sets for the 'body'.
*/
  & [class*="pure-u"] {
    font-family: sans-serif;
  }
`;

export default StyledGrid;
