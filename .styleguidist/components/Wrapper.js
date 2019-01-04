import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import Base from "../../src/components/Base/Base";
import Grid from "../../src/components/Grid/Grid";
import Button from "../../src/components/Button/Button";

const StyleguideTheming = createGlobalStyle`
  h1 {
    color:#FFF !important;
  }
`;

class Wrapper extends React.Component {
  render() {
    return (
      <Base>
        <StyleguideTheming />
        {this.props.children}
      </Base>
    );
  }
}

Wrapper.propTypes = {
  /**
   * Child components (array or single element)
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Wrapper;
