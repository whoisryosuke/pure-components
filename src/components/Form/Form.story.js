import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Form from "./Form";
import Button from "../Button/Button";

storiesOf("Form", module)
  .add("with text", () => (
    <Form onClick={action("clicked")}>
      <fieldset>
        <input type="text" value="Text here" />
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  ))
  .add("Stacked", () => (
    <Form stacked>
      <fieldset>
        <legend>A Stacked Form</legend>

        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Email" />
        <span className="pure-form-message">This is a required field.</span>

        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Password" />

        <label htmlFor="state">State</label>
        <select id="state">
          <option>AL</option>
          <option>CA</option>
          <option>IL</option>
        </select>

        <label htmlFor="remember" className="pure-checkbox">
          <input id="remember" type="checkbox" />
          {' '}
Remember me
        </label>

        <button type="submit" className="pure-button pure-button-primary">
          Sign in
        </button>
      </fieldset>
    </Form>
  ))
  .add("Aligned", () => (
    <Form aligned>
      <fieldset>
        <div className="pure-control-group">
          <label htmlFor="name">Username</label>
          <input id="name" type="text" placeholder="Username" />
          <span className="pure-form-message-inline">
            This is a required field.
          </span>
        </div>

        <div className="pure-control-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Password" />
        </div>

        <div className="pure-control-group">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" placeholder="Email Address" />
        </div>

        <div className="pure-control-group">
          <label htmlFor="foo">Supercalifragilistic Label</label>
          <input id="foo" type="text" placeholder="Enter something here..." />
        </div>

        <div className="pure-controls">
          <label htmlFor="cb" className="pure-checkbox">
            <input id="cb" type="checkbox" />
            {' '}
I've read the terms and conditions
          </label>

          <button type="submit" className="pure-button pure-button-primary">
            Submit
          </button>
        </div>
      </fieldset>
    </Form>
  ));
