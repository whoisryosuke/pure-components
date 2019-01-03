import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Base
 *
 * Optional wrapper for the entire app to provide CSS normalization
 * and extra rules that Pure adds on top of Normalize.css
 *
 * @param {*} { children }
 */

function Base({ children }) {
  return <React.Fragment>{children}</React.Fragment>;
}

Base.propTypes = {
  /**
   * Child components (array or single element)
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const StyledBase = styled(Base)`
  /**
 * Always hide an element when it has the \`hidden\` HTML attribute.
 */
  .hidden,
  [hidden] {
    display: none !important;
  }

  /**
 * Add this class to an image to make it fit within it's fluid parent wrapper while maintaining
 * aspect ratio.
 */
  .pure-img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export default StyledBase;
