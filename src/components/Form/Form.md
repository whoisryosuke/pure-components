### Default Form

To create a default inline form, add wrap your form elements in a `<Form></Form>` component.

> There aren't any special Grid.Unit as="input" width={[23/24]} components bundled, all the CSS is applied on the form level targeting input's using their type (e.g. `type="text"`). If you want to override any styling, extend the Form component itself with any custom styles.

A compact inline form

Example:

```js
<Form>
  <fieldset>
    <legend>A compact inline form</legend>

    <Grid.Unit as="input" width={[23 / 24]} type="email" placeholder="Email" />
    <Grid.Unit
      as="input"
      width={[23 / 24]}
      type="password"
      placeholder="Password"
    />

    <label for="remember">
      <Grid.Unit as="input" width={[23 / 24]} id="remember" type="checkbox" />{" "}
      Remember me
    </label>

    <Button type="submit" class="pure-button pure-button-primary">
      Sign in
    </Button>
  </fieldset>
</Form>
```

### Stacked Form

To create a stacked form with Grid.Unit as="input" width={[23/24]} elements below the labels, add the `stacked` prop to a `<Form>` component.

```js
<Form stacked>
  <fieldset>
    <legend>A Stacked Form</legend>

    <label for="email">Email</label>
    <Grid.Unit
      as="input"
      width={[23 / 24]}
      id="email"
      type="email"
      placeholder="Email"
    />
    <span class="pure-form-message">This is a required field.</span>

    <label for="password">Password</label>
    <Grid.Unit
      as="input"
      width={[23 / 24]}
      id="password"
      type="password"
      placeholder="Password"
    />

    <label for="state">State</label>
    <select id="state">
      <option>AL</option>
      <option>CA</option>
      <option>IL</option>
    </select>

    <label for="remember" class="pure-checkbox">
      <Grid.Unit as="input" width={[23 / 24]} id="remember" type="checkbox" />{" "}
      Remember me
    </label>

    <button type="submit" class="pure-button pure-button-primary">
      Sign in
    </button>
  </fieldset>
</Form>
```

### Aligned Form

To create an aligned form, add the `aligned` prop to a `<Form>` component. In an aligned form, the labels are right-aligned against the form Grid.Unit as="input" width={[23/24]} controls, but on smaller screens revert to a stacked form.

```js
<Form>
  <fieldset>
    <div class="pure-control-group">
      <label for="name">Username</label>
      <Grid.Unit
        as="input"
        width={[23 / 24]}
        id="name"
        type="text"
        placeholder="Username"
      />
      <span class="pure-form-message-inline">This is a required field.</span>
    </div>

    <div class="pure-control-group">
      <label for="password">Password</label>
      <Grid.Unit
        as="input"
        width={[23 / 24]}
        id="password"
        type="password"
        placeholder="Password"
      />
    </div>

    <div class="pure-control-group">
      <label for="email">Email Address</label>
      <Grid.Unit
        as="input"
        width={[23 / 24]}
        id="email"
        type="email"
        placeholder="Email Address"
      />
    </div>

    <div class="pure-control-group">
      <label for="foo">Supercalifragilistic Label</label>
      <Grid.Unit
        as="input"
        width={[23 / 24]}
        id="foo"
        type="text"
        placeholder="Enter something here..."
      />
    </div>

    <div class="pure-controls">
      <label for="cb" class="pure-checkbox">
        <Grid.Unit as="input" width={[23 / 24]} id="cb" type="checkbox" /> I've
        read the terms and conditions
      </label>

      <Button type="submit" primary>
        Submit
      </Button>
    </div>
  </fieldset>
</Form>
```

### Multi-Column Form (with Pure Grids)

To create multi-column forms, include your form elements within a Pure Grid. Creating responsive multi-column forms (like the example below) requires Pure Responsive Grids to be present on the page.

```js
<Form>
  <fieldset>
    <legend>Legend</legend>
    <Grid>
      <Grid.Unit width={[1, 1 / 3]}>
        <label htmlFor="first-name">First Name</label>
        <Grid.Unit as="input" width={[23 / 24]} id="first-name" type="text" />
      </Grid.Unit>

      <Grid.Unit width={[1, 1 / 3]}>
        <label htmlFor="last-name">Last Name</label>
        <Grid.Unit as="input" width={[23 / 24]} id="last-name" type="text" />
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
```

### Grouped Inputs

To group sets of text-based Grid.Unit as="input" width={[1/2]} elements, wrap them in a `<fieldset>` element with a `.pure-group` classname. Grouped inputs work well for sign-up forms and look natural on mobile devices.

```js
<Form>
  <fieldset class="pure-group">
    <Grid.Unit as="input" width={[1 / 2]} type="text" placeholder="Username" />
    <Grid.Unit as="input" width={[1 / 2]} type="text" placeholder="Password" />
    <Grid.Unit as="input" width={[1 / 2]} type="email" placeholder="Email" />
  </fieldset>

  <fieldset class="pure-group">
    <Grid.Unit as="input" width={[1 / 2]} type="text" placeholder="A title" />
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
```

## Input Sizing

Input elements can be sized using the `<Grid.Unit>` component, passing input to the `as` prop. To minimize the amount of CSS in this library, there's no classnames to assign grid.

```js
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
```

### Required Inputs

To mark a form control as required, add the `required` attribute.

```js
<Form>
  <input type="email" placeholder="Requires an email" required />
</Form>
```

### Disabled Inputs

To disable a form control, add the disabled attribute.

```js
<Form>
  <input type="text" placeholder="Disabled input here..." disabled />
</Form>
```

### Read-Only Inputs

To make a form input read-only, add the readonly attribute. The difference between disabled and readonly is read-only inputs are still focusable. This allows people to interact with the input and select its text, whereas disabled controls are not interactive.

```js
<Form>
  <input type="text" value="Readonly input here..." readonly />
</Form>
```

### Rounded Inputs

To display a form control with rounded corners, add the `pure-input-rounded` classname.

```js
<Form>
  <input type="text" class="pure-input-rounded" />
  <Button type="submit">Search</Button>
</Form>
```

### Checkboxes and Radios

To normalize and align checkboxes and radio inputs, add the `pure-checkbox` or `pure-radio` classname.

```js
<Form>
  <label for="option-one" class="pure-checkbox">
    <input id="option-one" type="checkbox" value="" />
    Here's option one.
  </label>

  <label for="option-two" class="pure-radio">
    <input
      id="option-two"
      type="radio"
      name="optionsRadios"
      value="option1"
      checked
    />
    Here's a radio button. You can choose this one..
  </label>

  <label for="option-three" class="pure-radio">
    <input
      id="option-three"
      type="radio"
      name="optionsRadios"
      value="option2"
    />
    ..Or this one!
  </label>
</Form>
```
