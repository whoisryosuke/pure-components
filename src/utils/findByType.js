import React from "react";

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
