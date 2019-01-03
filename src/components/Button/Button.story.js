import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("clicked")}>
      Hello Button
    </Button>
  ))
  .add("Active", () => (
    <Button active onClick={action("clicked")}>
      Hello Button
    </Button>
  ))
  .add("Primary", () => (
    <Button primary onClick={action("clicked")}>
      Hello Button
    </Button>
  ))
  .add("Customizing", () => (
    <div>
      <Button
        style={{
          background: "rgb(28, 184, 65)",
          color: "white",
          borderRadius: "4px",
          textShadow: "0 1px 1px rgba(0, 0, 0, 0.2);"
        }}
        onClick={action("clicked")}
      >
        Success Button
      </Button>
      <Button
        style={{
          background: "rgb(202, 60, 60)",
          color: "white",
          borderRadius: "4px",
          textShadow: "0 1px 1px rgba(0, 0, 0, 0.2);"
        }}
        onClick={action("clicked")}
      >
        Error Button
      </Button>
      <Button
        style={{
          background: "rgb(223, 117, 20)",
          color: "white",
          borderRadius: "4px",
          textShadow: "0 1px 1px rgba(0, 0, 0, 0.2);"
        }}
        onClick={action("clicked")}
      >
        Warning Button
      </Button>
      <Button
        style={{
          background: "rgb(66, 184, 221)",
          color: "white",
          borderRadius: "4px",
          textShadow: "0 1px 1px rgba(0, 0, 0, 0.2);"
        }}
        onClick={action("clicked")}
      >
        Secondary Button
      </Button>
    </div>
  ))
  .add("Sizes", () => (
    <div>
      <Button style={{ fontSize: "70%" }} onClick={action("clicked")}>
        Extra Small Button
      </Button>
      <Button style={{ fontSize: "85%" }} onClick={action("clicked")}>
        Small Button
      </Button>
      <Button style={{ fontSize: "110%" }} onClick={action("clicked")}>
        Large Button
      </Button>
      <Button style={{ fontSize: "125%" }} onClick={action("clicked")}>
        Extra Large Button
      </Button>
    </div>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
