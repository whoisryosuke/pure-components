import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const showDropdown = ({ active }) => {
  if (active) {
    return `display:block;`;
  }
  return ``;
};

function BaseDropdown({ className, children }) {
  return <nav className={`dropdown ${className}`}>{children}</nav>;
}

BaseDropdown.propTypes = {
  /**
   * Class provided by Styled Components
   */
  className: PropTypes.string.isRequired,
  /**
   * Child components (array or single element)
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

/**
 * Dropdown used in `<Menu>` component
 *
 * @param {*} { className, children }
 */
const Dropdown = styled(BaseDropdown)`
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
  margin: 0;
  padding: 0;
  z-index: 3;

  ${props => showDropdown(props)};
`;

/** @component */
export default Dropdown;
