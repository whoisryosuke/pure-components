import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";

const GridUnit = ({ className, children }, ...rest) => (
  <div className={className} {...rest}>
    {children}
  </div>
);

/**
 * Creates a "unit" inside of the flexbox grid.
 * Comparable to a column in Bootstrap or cell in a spreadsheet.
 *
 * @param {object} {className, children}
 */
const Unit = styled(GridUnit)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  display: inline-block;
  *display: inline; /* IE < 8: fake inline-block */
  zoom: 1;
  letter-spacing: normal;
  word-spacing: normal;
  vertical-align: top;
  text-rendering: auto;
`;

Unit.propTypes = {
  /**
   * Responsive margin values (string or array).
   * Similar props: `mt: margin-top`, `mx: margin-left and margin-right`
   */
  m: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
  /**
   * Responsive padding values (string or array)
   * Similar props: `pt: padding-top`, `px: padding-left and padding-right`
   */
  p: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
  /**
   * Responsive width values (number or array)
   * Numbers from 0-1 are converted to percentage widths.
   * Numbers greater than 1 are converted to pixel values.
   * String values are passed as raw CSS values.
   * And arrays are converted to responsive width styles.
   */
  width: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
  /**
   * Responsive width values (number or array)
   * Numbers from 0-8 (or theme.fontSizes.length) are converted to values on the font size scale.
   * Numbers greater than theme.fontSizes.length are converted to raw pixel values.
   * String values are passed as raw CSS values.
   * And array values are converted into responsive values.
   */
  fontSize: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ]),
  /**
   * Set text alignment inside component
   */
  textAlign: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  /**
   * Set font color of component
   */
  color: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.string
  ]),
  /**
   * Set background color of component
   */
  bg: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.string
  ]),

  /**
   * Child components (array or single element)
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

/** @component */
export default Unit;
