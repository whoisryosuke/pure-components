import React from "react";
import { shallow, mount, render } from "enzyme";
import Table from "./Table";

describe("Table Component", () => {
  it("should render without throwing an error", () => {
    expect(shallow(<Table>Test</Table>).exists()).toBe(true);
  });
});
