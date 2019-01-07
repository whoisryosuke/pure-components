import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import findByType from "../../utils/findByType";

const scrollableHorizontal = (isScrollable, isHorizontal) => {
  if (isScrollable && isHorizontal) {
    return `
      white-space: nowrap;
      overflow-y: hidden;
      overflow-x: auto;
      -ms-overflow-style: none;
      -webkit-overflow-scrolling: touch;
      /* a little extra padding for this style to allow for scrollbars */
      padding: .5em 0;

      ::-webkit-scrollbar {
        display: none;
      }
      & .list {
        display: inline-block;
      }
    `;
  }
};
const horizontalMenu = isHorizontal => {
  if (isHorizontal) {
    return `
      width: 100%;
      white-space: nowrap;
      & .list {
        display: inline-block;
      }
      /* Initial menus should be inline-block so that they are horizontal */
      & .item,
      & .heading,
      & .separator {
        display: inline-block;
        *display: inline;
        zoom: 1;
        vertical-align: middle;
      }
      & .separator {
        width: 1px;
        height: 1.3em;
        margin: 0 .3em;
      }
      & .dropdown {
        left: 0;
        top: auto;
        width: inherit;
      }
    `;
  }
};

const selectedMenu = isSelected => {
  if (isSelected) {
    return `
      & > .link {
        color: #000;
      }
    `;
  }
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
};

const dropdownArrow = (isHorizontal, isDropdown) => {
  if (isHorizontal && isDropdown) {
    return `
      & .link:after {
        content: "\\25BE";
      }
    `;
  }
};

const Heading = styled.span`
  display: block;
  text-decoration: none;
  white-space: nowrap;

  text-transform: uppercase;
  color: #565d64;
  padding: 0.5em 1em;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const BaseItem = ({ className, children }, ...rest) => (
  <li className={className} {...rest}>
    {children}
  </li>
);

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

      /* Displays dropdown on hover */
      &:hover > .dropdown {
          display: block;
          position: absolute;
      }

    /* Horizontal Menus - show the dropdown arrow */
    ${props => dropdownArrow(props.horizontal, props.dropdown)}
    
`;
Item.propTypes = {
  /**
   * Makes links appear active
   */
  active: PropTypes.boolean,
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

class BaseMenu extends PureComponent {
  renderHeading() {
    const { children } = this.props;
    // First we try to find the Heading sub-component among the children of Article
    const title = findByType(children, Heading);
    // If we don’t find any we return null
    if (!title || title.length == 0) {
      return null;
    }
    // Else we return the children of the Heading sub-component as wanted
    return <Heading className="heading">{title[0].props.children}</Heading>;
  }

  renderList() {
    const { children } = this.props;
    const list = findByType(children, List);
    const items = list.map(listItems =>
      listItems.props.children.map(item => (
        <Item className="item" key={item.props.children}>
          {item.props.children}
        </Item>
      ))
    );
    if (!list) {
      return null;
    }
    return <List className="list">{items}</List>;
  }

  render() {
    return (
      <nav className={this.props.className} {...this.props}>
        {this.renderHeading()}
        {this.renderList()}
      </nav>
    );
  }
}

BaseMenu.Heading = Heading;
BaseMenu.List = List;
BaseMenu.Item = Item;

/**
 * Simple CSS and React for menus. See <List.Heading> and <List.Item>.
 *
 * @visibleName Menu
 */
const Menu = styled(BaseMenu)`
  box-sizing: border-box;
  position: relative;

  &.separator {
    background-color: #ccc;
    height: 1px;
    margin: 0.3em 0;
  }

  ${props => horizontalMenu(props.horizontal)};
  ${props => selectedMenu(props.selected)};
  ${props => scrollableHorizontal(props.selected, props.horizontal)};
`;

Menu.propTypes = {
  /**
   * Makes menu items display horizontal (inline)
   */
  horizontal: PropTypes.bool,

  /**
   * Makes menu items appear selected
   */
  selected: PropTypes.bool,

  /**
   * Child components (array or single element)
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

/** @component */
export default Menu;
