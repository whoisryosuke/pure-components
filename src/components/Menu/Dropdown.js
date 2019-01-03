import React from "react";
import styled from "styled-components";

/**
 * Dropdown used in <Menu> component
 *
 * @param {*} { className, children }
 */
function Dropdown({ className, children }) {
  return <nav className={`dropdown ${className}`}>{children}</nav>;
}

const StyledDropdown = styled(Dropdown)`
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
  margin: 0;
  padding: 0;
  z-index: 3;
`;

export default StyledDropdown;
