import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { space, width, fontSize, color } from "styled-system";

import Group from "./Button.Group";

const activeButton = isActive => {
  let style;
  if (isActive) {
    style = `
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15) inset,
      0 0 6px rgba(0, 0, 0, 0.2) inset;
    border-color: #000\9;
    `;
  }
  style = `${style}
  :active {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15) inset,
      0 0 6px rgba(0, 0, 0, 0.2) inset;
    border-color: #000\9;
  }`;
  return style;
};

const BaseButton = ({ className, children, style, onClick }) => (
  <button
    className={`${className} button`}
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
);

BaseButton.Group = Group;

/**
 * Pure CSS and React button.
 */
const Button = styled(BaseButton)`
  font-family: inherit;
  font-size: 100%;
  padding: 0.5em 1em;
  color: #444; /* rgba not supported (IE 8) */
  color: rgba(0, 0, 0, 0.8); /* rgba supported */
  border: 1px solid #999; /*IE 6/7/8*/
  border: none rgba(0, 0, 0, 0); /*IE9 + everything else*/
  background-color: #e6e6e6;
  text-decoration: none;
  border-radius: 2px;
  
  ${space}
  ${width}
  ${fontSize}
  ${color}

  :hover {
    background-image: linear-gradient(
      transparent,
      rgba(0, 0, 0, 0.05) 40%,
      rgba(0, 0, 0, 0.1)
    );
  }

  :focus {
    outline: 0;
  }

  ${props => activeButton(props.active)};


  ${props =>
    props.disabled
      ? `border: none;
    background-image: none;
    /* csslint ignore:start */
    filter: alpha(opacity=40);
    /* csslint ignore:end */
    opacity: 0.40;
    cursor: not-allowed;
    box-shadow: none;
    pointer-events: none;`
      : ``}

  ${props => (props.hidden ? `display: none;` : ``)}
    
  ${props =>
    props.primary
      ? `background-color: rgb(0, 120, 231);
    color: #fff;`
      : ``}

  ${props =>
    props.rounded
      ? `border-radius:1em;`
      : ``}
`;

Button.propTypes = {
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
   * Makes button appear inset to distinguish it being "activated"
   */
  active: PropTypes.boolean,

  /**
   * Makes button appear disabled
   */
  disabled: PropTypes.boolean,

  /**
   * Hides button completely using `display:none`
   */
  hidden: PropTypes.boolean,

  /**
   * Styles button with primary color (defaults to blue)
   */
  primary: PropTypes.boolean,

  /**
   * Additional object with inline styles to override default CSS
   */
  style: PropTypes.object,

  /**
   * Function called when user clicks button
   */
  onClick: PropTypes.func,

  /**
   * Child components (array or single element)
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

/** @component */
export default Button;
