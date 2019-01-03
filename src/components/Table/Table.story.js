import React from "react";
import { storiesOf } from "@storybook/react";

import Table from "./Table";

storiesOf("Table", module)
  .add("basic table", () => (
    <Table>
      <thead>
        <tr>
          <td>Title</td>
          <td>Title</td>
          <td>Title</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hello Table</td>
          <td>Hello Table</td>
          <td>Hello Table</td>
        </tr>
        <tr>
          <td>Hello Table</td>
          <td>Hello Table</td>
          <td>Hello Table</td>
        </tr>
      </tbody>
    </Table>
  ))
  .add("horizontal", () => (
    <Table horizontal>
      <thead>
        <tr>
          <td>Title</td>
          <td>Title</td>
          <td>Title</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hello Table</td>
          <td>Hello Table</td>
          <td>Hello Table</td>
        </tr>
        <tr>
          <td>Hello Table</td>
          <td>Hello Table</td>
          <td>Hello Table</td>
        </tr>
      </tbody>
    </Table>
  ))
  .add("bordered", () => (
    <Table bordered>
      <thead>
        <tr>
          <td>Title</td>
          <td>Title</td>
          <td>Title</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hello Table</td>
          <td>Hello Table</td>
          <td>Hello Table</td>
        </tr>
        <tr>
          <td>Hello Table</td>
          <td>Hello Table</td>
          <td>Hello Table</td>
        </tr>
      </tbody>
    </Table>
  ))
  .add("striped", () => (
    <Table striped>
      <tr>
        <td>Hello Table</td>
        <td>Hello Table</td>
        <td>Hello Table</td>
      </tr>
      <tr>
        <td>Hello Table</td>
        <td>Hello Table</td>
        <td>Hello Table</td>
      </tr>
      <tr>
        <td>Hello Table</td>
        <td>Hello Table</td>
        <td>Hello Table</td>
      </tr>
      <tr>
        <td>Hello Table</td>
        <td>Hello Table</td>
        <td>Hello Table</td>
      </tr>
    </Table>
  ));
