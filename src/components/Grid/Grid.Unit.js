import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import calculateGridWidth from "../../utils/calculateGridWidth";

/**
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
  ${props => calculateGridWidth(props.columns)} display: inline-block;
  *display: inline; /* IE < 8: fake inline-block */
  zoom: 1;
  letter-spacing: normal;
  word-spacing: normal;
  vertical-align: top;
  text-rendering: auto;
`;

export default Unit;
