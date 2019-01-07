import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import findByType from "../../utils/findByType";
import Item from "./Item";

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
  return ``;
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
  return ``;
};

const selectedMenu = isSelected => {
  if (isSelected) {
    return `
      & > .link {
        color: #000;
      }
    `;
  }
  return ``;
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

class BaseMenu extends PureComponent {
  renderMenu() {
    const { children } = this.props;

    const listType = [List.displayName] || [List.name];
    const headingType = [Heading.displayName] || [Heading.name];
    const items = React.Children.map(children, child => {
      const childType =
        child && child.type && (child.type.displayName || child.type.name);
      if (childType.includes(listType)) {
        return child.props.children.map(item => (
          <Item className="item" key={item.props.children}>
            {item.props.children}
          </Item>
        ));
      }
      if (childType.includes(headingType)) {
        return <Heading className="heading">{child.props.children}</Heading>;
      }
    });
    if (!items) {
      return null;
    }
    return <List className="list">{items}</List>;
  }

  render() {
    const { className } = this.props;
    return (
      <nav className={className} {...this.props}>
        {this.renderMenu()}
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
