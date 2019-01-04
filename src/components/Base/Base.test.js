import React from "react";
import { shallow, mount, render } from "enzyme";
import Base from "./Base";

describe("Base Component", () => {
  it("should render without throwing an error", () => {
    expect(shallow(<Base>Test</Base>).exists()).toBe(true);
  });
});
