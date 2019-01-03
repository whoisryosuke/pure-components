import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Table
 *
 */
const Table = ({ className, children }) => (
  <table className={className}>{children}</table>
);

Table.propTypes = {
  /**
   * Child components (array or single element)
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const StyledTable = styled(Table)`
  /* Remove spacing between table cells (from Normalize.css) */
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #cbcbcb;

  & caption {
    color: #000;
    font: italic 85%/1 arial, sans-serif;
    padding: 1em 0;
    text-align: center;
  }

  & td,
  & th {
    border-left: 1px solid #cbcbcb; /*  inner column border */
    border-width: 0 0 0 1px;
    font-size: inherit;
    margin: 0;
    overflow: visible; /*to make ths where the title is really long work*/
    padding: 0.5em 1em; /* cell padding */
  }

  /* Consider removing this next declaration block, as it causes problems when
there's a rowspan on the first cell. Case added to the tests. issue#432 */
  & td:first-child,
  & th:first-child {
    border-left-width: 0;
  }

  & thead {
    background-color: #e0e0e0;
    color: #000;
    text-align: left;
    vertical-align: bottom;
  }

  /*
striping:
   even - #fff (white)
   odd  - #f2f2f2 (light gray)
*/
  & td {
    background-color: transparent;
  }
  & td.odd {
    background-color: #f2f2f2;
  }

  /* nth-child selector for modern browsers */
  ${props =>
    props.striped
      ? `& tr:nth-child(2n-1) td {
    background-color: #f2f2f2;
  }`
      : ``};

  /* BORDERED TABLES */
  ${props =>
    props.bordered
      ? `& td {
    border-bottom: 1px solid #cbcbcb;
  }
  &-bordered tbody > tr:last-child > td {
    border-bottom-width: 0;
  }`
      : ``};

  /* HORIZONTAL BORDERED TABLES */

  ${props =>
    props.horizontal
      ? `
  & td,
  & th {
    border-width: 0 0 1px 0;
    border-bottom: 1px solid #cbcbcb;
  }
  & tbody > tr:last-child > td {
    border-bottom-width: 0;
  }`
      : ``};
`;

export default StyledTable;
