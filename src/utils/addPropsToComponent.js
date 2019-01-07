import React from "react";

/**
 * Loops through children and adds provided props to specified component
 *
 * @param {React.Children} children - React Component's children
 * @param {React.Component} component - Component to search for and apply props to
 * @param {object} propsToAdd - Props to apply to component
 * @returns {React.Children}
 */
const addPropsToComponent = (children, component, propsToAdd) => {
  const type = [component.displayName] || [component.name];
  return React.Children.map(children, child => {
    const childType =
      child && child.type && (child.type.displayName || child.type.name);
    if (type.includes(childType)) {
      return React.cloneElement(child, propsToAdd);
    }
    return child;
  });
};
export default addPropsToComponent;
