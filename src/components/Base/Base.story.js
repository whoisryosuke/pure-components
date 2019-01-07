import React from "react";
import { storiesOf } from "@storybook/react";

import Base from "./Base";

storiesOf("Base", module).add("app wrapper", () => <Base>App here</Base>);
