import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import addPropsToComponent from "../../utils/addPropsToComponent";
import Dropdown from "./Dropdown";

const dropdownArrow = (isHorizontal, isDropdown) => {
  if (isHorizontal && isDropdown) {
    return `
      & .link:after {
        content: "\\25BE";
      }
    `;
  }
  return ``;
};

const scrollableMenu = isScrollable => {
  if (isScrollable) {
    return `
      overflow-y: scroll;
      overflow-x: hidden;

      & .list {
        display: block;
      }
    `;
  }
  return ``;
};

class BaseItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  /**
   * Toggles active state of dropdown
   *
   * @memberof BaseItem
   * @private
   */
  handleDropdown = e => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  /**
   * Renders all child elements
   * and applies state as props to nested Dropdown menus
   *
   * @memberof BaseItem
   * @private
   */
  renderDropdown = () => {
    const { children } = this.props;
    const { active } = this.state;

    /**
     * Find Dropdown components and add active state as prop
     */
    const propsToAdd = { active };
    const elements = addPropsToComponent(children, Dropdown, propsToAdd);
    if (!elements) {
      return null;
    }
    return elements;
  };

  render() {
    const { className, classes } = this.props;
    return (
      <li
        className={`${className} ${classes}`}
        onMouseEnter={this.handleDropdown}
        onMouseLeave={this.handleDropdown}
        onFocus={this.handleDropdown}
        onBlur={this.handleDropdown}
      >
        {this.renderDropdown()}
      </li>
    );
  }
}

BaseItem.propTypes = {
  /**
   * Class provided by Styled Components
   */
  className: PropTypes.string.isRequired,
  /**
   * Additional classes to append to className
   */
  classes: PropTypes.string,
  /**
   * Child components (array or single element)
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

BaseItem.defaultProps = {
  classes: ""
};

const Item = styled(BaseItem)`
  position: relative;
  padding: 0;
  margin: 0;
  height: 100%;

  & .link:hover,
  & .link:focus {
    text-decoration: none;
    background-color: #eee;
  }
  & .link {
    display: block;
    text-decoration: none;
    white-space: nowrap;

    color: #777;
    padding: 0.5em 1em;
  }

  ${props =>
    props.active
      ? `
    & .link {
      background-color: #eee;
    }`
      : ``}

  ${props =>
    props.disabled
      ? `
    padding: .5em 1em;
    opacity: .5;
    & .link {
      background-color: transparent;
    }`
      : ``}

  ${props =>
    props.dropdown
      ? `
    padding: .5em 1em;
    opacity: .5;
    & .link {
      background-color: transparent;
    }
    & .link:after {
      padding-left: 0.5em;
      content: "\\25B8";
      font-size: small;
    }`
      : ``}

  ${props =>
    props.selected
      ? `
    & > .link,
    & > .link:visited {
        color: #000;
    }`
      : ``}

    /* CSS fallback to display nested dropdowns on hover */
    :active > .dropdown,
    :focus > .dropdown,
    :hover > .dropdown {
        display: block;
        position: absolute;
    }

    /* Horizontal Menus - show the dropdown arrow */
    ${props => dropdownArrow(props.horizontal, props.dropdown)}
    ${props => scrollableMenu(props.scrollable)}
    
`;
Item.propTypes = {
  /**
   * Makes links appear active
   */
  active: PropTypes.boolean,
  /**
   * Extra class names to append to element
   */
  classes: PropTypes.string,
  /**
   * Makes links appear disabled
   */
  disabled: PropTypes.boolean,
  /**
   * Adds necessary CSS for a nested Dropdown component
   */
  dropdown: PropTypes.boolean,
  /**
   * Makes links appear selected
   */
  selected: PropTypes.boolean
};

export default Item;
