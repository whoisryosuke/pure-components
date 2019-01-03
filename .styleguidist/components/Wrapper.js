import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Base from "../../src/components/Base/Base";

class Wrapper extends React.Component {
  render() {
    return <Base>{this.props.children}</Base>;
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
