import React from "react";
import { shallow, mount, render } from "enzyme";
import Button from "./Button";

describe("Button Component", () => {
  it("should render without throwing an error", () => {
    expect(shallow(<Button>Test</Button>).exists()).toBe(true);
  });
});
