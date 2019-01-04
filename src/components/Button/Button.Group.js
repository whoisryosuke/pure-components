import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Group = ({ className, children, ariaLabel }) => (
  <div className={className} role="group" ariaLabel={ariaLabel}>
    {children}
  </div>
);

const StyledGroup = styled(Group)`
  letter-spacing: -0.31em; /* Webkit: collapse white-space between units */
  *letter-spacing: normal; /* reset IE < 8 */
  *word-spacing: -0.43em; /* IE < 8: collapse white-space between units */
  text-rendering: optimizespeed; /* Webkit: fixes text-rendering: optimizeLegibility */

  .opera-only :-o-prefocus,
  & {
    word-spacing: -0.43em;
  }

  & > .button {
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
    text-rendering: auto;
  }
`;

export default StyledGroup;
