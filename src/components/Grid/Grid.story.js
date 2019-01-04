import React from "react";
import { storiesOf } from "@storybook/react";

import Grid from "./Grid";

storiesOf("Grid", module)
  .add("basic", () => (
    <Grid>
      <Grid.Unit width={[1 / 3, 5 / 24]}>BRAND</Grid.Unit>
      <Grid.Unit width={[1 / 3]}>BRAND</Grid.Unit>
      <Grid.Unit width={[1 / 3]}>BRAND</Grid.Unit>
    </Grid>
  ))
  .add("24", () => (
    <Grid>
      <Grid.Unit width={[3 / 24, 5 / 24]}>BRAND</Grid.Unit>
      <Grid.Unit width={[6 / 24]}>BRAND</Grid.Unit>
      <Grid.Unit width={[4 / 24]}>BRAND</Grid.Unit>
    </Grid>
  ))
  .add("styled", () => (
    <Grid>
      <Grid.Unit width={[3 / 24, 5 / 24]} bg="red">
        BRAND
      </Grid.Unit>
      <Grid.Unit width={[6 / 24]} color="red">
        BRAND
      </Grid.Unit>
      <Grid.Unit width={[4 / 24]} m={[20]}>
        BRAND
      </Grid.Unit>
    </Grid>
  ));
