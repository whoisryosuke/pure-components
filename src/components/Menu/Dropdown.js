import React from "react";
import styled from "styled-components";

function BaseDropdown({ className, children }) {
  return <nav className={`dropdown ${className}`}>{children}</nav>;
}

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
`;

/** @component */
export default Dropdown;
