import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Grid from "./Grid";

storiesOf("Grid", module)
  .add("basic", () => (
    <Grid>
      <Grid.Unit columns={[1, 3]}>BRAND</Grid.Unit>
      <Grid.Unit columns={[1, 3]}>BRAND</Grid.Unit>
      <Grid.Unit columns={[1, 3]}>BRAND</Grid.Unit>
    </Grid>
  ))
  .add("24", () => (
    <Grid>
      <Grid.Unit columns={[3, 24]}>BRAND</Grid.Unit>
      <Grid.Unit columns={[6, 24]}>BRAND</Grid.Unit>
      <Grid.Unit columns={[4, 24]}>BRAND</Grid.Unit>
    </Grid>
  ));
