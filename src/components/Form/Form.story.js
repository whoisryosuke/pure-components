import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Grid from "../Grid/Grid";
import Form from "./Form";
import Button from "../Button/Button";

storiesOf("Form", module)
  .add("Default form", () => (
    <Form>
        <fieldset>
            <legend>A compact inline form</legend>

            <Grid.Unit as="input" width={[23/24]} type="email" placeholder="Email" />
            <Grid.Unit as="input" width={[23/24]} type="password" placeholder="Password" />

            <label for="remember">
                <Grid.Unit as="input" width={[23/24]} id="remember" type="checkbox" /> Remember me
            </label>

            <Button type="submit" class="pure-button pure-button-primary" onClick={action("clicked")}>Sign in</Button>
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
  ))
  .add("Multi-column Form", () => (
    <Form>
      <fieldset>
        <legend>Legend</legend>
        <Grid>
          <Grid.Unit width={[1, 1 / 3]}>
            <label htmlFor="first-name">First Name</label>
            <Grid.Unit
              as="input"
              width={[23 / 24]}
              id="first-name"
              type="text"
            />
          </Grid.Unit>

          <Grid.Unit width={[1, 1 / 3]}>
            <label htmlFor="last-name">Last Name</label>
            <Grid.Unit
              as="input"
              width={[23 / 24]}
              id="last-name"
              type="text"
            />
          </Grid.Unit>

          <Grid.Unit width={[1, 1 / 3]}>
            <label htmlFor="email">E-Mail</label>
            <Grid.Unit
              as="input"
              width={[23 / 24]}
              id="email"
              type="email"
              required
            />
          </Grid.Unit>

          <Grid.Unit width={[1, 1 / 3]}>
            <label htmlFor="city">City</label>
            <Grid.Unit as="input" width={[23 / 24]} id="city" type="text" />
          </Grid.Unit>

          <Grid.Unit width={[1, 1 / 3]}>
            <label htmlFor="state">State</label>
            <Grid.Unit as="select" id="state" width={[1 / 2]}>
              <option>AL</option>
              <option>CA</option>
              <option>IL</option>
            </Grid.Unit>
          </Grid.Unit>
        </Grid>

        <label htmlFor="terms" className="pure-checkbox">
          <Grid.Unit as="input" width={[1 / 24]} id="terms" type="checkbox" />
          I've read the terms and conditions
        </label>

        <Button type="submit" class="pure-button pure-button-primary">
          Submit
        </Button>
      </fieldset>
    </Form>
  ))
  .add("Grouped Form", () => (
    <Form>
      <fieldset className="pure-group">
        <Grid.Unit
          as="input"
          width={[1 / 2]}
          type="text"
          placeholder="Username"
        />
        <Grid.Unit
          as="input"
          width={[1 / 2]}
          type="text"
          placeholder="Password"
        />
        <Grid.Unit
          as="input"
          width={[1 / 2]}
          type="email"
          placeholder="Email"
        />
      </fieldset>

      <fieldset className="pure-group">
        <Grid.Unit
          as="input"
          width={[1 / 2]}
          type="text"
          placeholder="A title"
        />
        <Grid.Unit
          as="textarea"
          width={[1 / 2]}
          textarea
          placeholder="Textareas work too"
        />
      </fieldset>

      <Grid>
        <Grid.Unit width={[1 / 2]} as={Button} type="submit" primary>
          Sign in
        </Grid.Unit>
      </Grid>
    </Form>
  ))
  .add("Input Sizing", () => (
    <Form>
      <Grid.Unit
        as="input"
        width={[1]}
        type="text"
        placeholder="<Grid.Unit as=&quot;input&quot; width={[1]} />"
      />
      <br />
      <Grid.Unit
        as="input"
        width={[2 / 3]}
        type="text"
        placeholder="<Grid.Unit as=&quot;input&quot; width={[2 / 3]} />"
      />
      <br />
      <Grid.Unit
        as="input"
        width={[1 / 2]}
        type="text"
        placeholder="<Grid.Unit as=&quot;input&quot; width={[1 / 2]} />"
      />
      <br />
      <Grid.Unit
        as="input"
        width={[1 / 3]}
        type="text"
        placeholder="<Grid.Unit as=&quot;input&quot; width={[1 / 3]} />"
      />
      <br />
      <Grid.Unit
        as="input"
        width={[1 / 4]}
        type="text"
        placeholder="<Grid.Unit as=&quot;input&quot; width={[1 / 4]} />"
      />
      <br />
    </Form>
  ))
  .add("Required input", () => (
    <Form>
      <input type="email" placeholder="Requires an email" required />
    </Form>
  ))
  .add("Disabled input", () => (
    <Form>
      <input type="text" placeholder="Disabled input here..." disabled />
    </Form>
  ))
  .add("Read-only input", () => (
    <Form>
      <input type="text" value="Readonly input here..." readOnly />
    </Form>
  ))
  .add("Rounded input", () => (
    <Form>
      <input type="text" className="pure-input-rounded" />
      <Button type="submit">Search</Button>
    </Form>
  ))
  .add("Checkboxes and Radio", () => (
    <Form>
      <label htmlFor="option-one" className="pure-checkbox">
        <input id="option-one" type="checkbox" value="" />
 Here's option one.
      </label>

      <label htmlFor="option-two" className="pure-radio">
        <input
          id="option-two"
          type="radio"
          name="optionsRadios"
          value="option1"
          checked
        />
        Here's a radio button. You can choose this one..
      </label>

      <label htmlFor="option-three" className="pure-radio">
        <input
          id="option-three"
          type="radio"
          name="optionsRadios"
          value="option2"
        />
        ..Or this one!
      </label>
    </Form>
  ));
