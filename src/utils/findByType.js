import React from "react";

/**
 * Loops through children and adds provided props to specified component
 *
 * @param {React.Children} children - React Component's children
 * @param {React.Component} component - Component to filter children by
 * @returns {React.Children}
 */
const findByType = (children, component) => {
  const result = [];
  const type = [component.displayName] || [component.name];
  React.Children.forEach(children, child => {
    const childType =
      child && child.type && (child.type.displayName || child.type.name);
    if (type.includes(childType)) {
      result.push(child);
    }
  });
  return result;
};
export default findByType;
