import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BaseForm = ({ className, children }) => (
  <form type="Form" className={className}>
    {children}
  </form>
);

/**
 * Pure CSS and React Form. Just wrap your regular DOM <input> tags and go!
 *
 * @param {*} { className, children }
 */
const Form = styled(BaseForm)`
  /*
Box-model set to false because we're setting a height on select elements, which
also have border and padding. This is done because some browsers don't render
the padding. We explicitly set the box-model for select elements to border-box,
so we can ignore the csslint warning.
*/

  & input[type="text"],
  & input[type="password"],
  & input[type="email"],
  & input[type="url"],
  & input[type="date"],
  & input[type="month"],
  & input[type="time"],
  & input[type="datetime"],
  & input[type="datetime-local"],
  & input[type="week"],
  & input[type="number"],
  & input[type="search"],
  & input[type="tel"],
  & input[type="color"],
  & select,
  & textarea {
    padding: 0.5em 0.6em;
    display: inline-block;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px #ddd;
    border-radius: 4px;
    vertical-align: middle;
    box-sizing: border-box;
  }

  /*
Need to separate out the :not() selector from the rest of the CSS 2.1 selectors
since IE8 won't execute CSS that contains a CSS3 selector.
*/
  & input:not([type]) {
    padding: 0.5em 0.6em;
    display: inline-block;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 3px #ddd;
    border-radius: 4px;
    box-sizing: border-box;
  }

  /* Chrome (as of v.32/34 on OS X) needs additional room for color to display. */
  /* May be able to remove this tweak as color inputs become more standardized across browsers. */
  & input[type="color"] {
    padding: 0.2em 0.5em;
  }

  & input[type="text"]:focus,
  & input[type="password"]:focus,
  & input[type="email"]:focus,
  & input[type="url"]:focus,
  & input[type="date"]:focus,
  & input[type="month"]:focus,
  & input[type="time"]:focus,
  & input[type="datetime"]:focus,
  & input[type="datetime-local"]:focus,
  & input[type="week"]:focus,
  & input[type="number"]:focus,
  & input[type="search"]:focus,
  & input[type="tel"]:focus,
  & input[type="color"]:focus,
  & select:focus,
  & textarea:focus {
    outline: 0;
    border-color: #129fea;
  }

  /*
Need to separate out the :not() selector from the rest of the CSS 2.1 selectors
since IE8 won't execute CSS that contains a CSS3 selector.
*/
  & input:not([type]):focus {
    outline: 0;
    border-color: #129fea;
  }

  & input[type="file"]:focus,
  & input[type="radio"]:focus,
  & input[type="checkbox"]:focus {
    outline: thin solid #129fea;
    outline: 1px auto #129fea;
  }
  & .pure-checkbox,
  & .pure-radio {
    margin: 0.5em 0;
    display: block;
  }

  & input[type="text"][disabled],
  & input[type="password"][disabled],
  & input[type="email"][disabled],
  & input[type="url"][disabled],
  & input[type="date"][disabled],
  & input[type="month"][disabled],
  & input[type="time"][disabled],
  & input[type="datetime"][disabled],
  & input[type="datetime-local"][disabled],
  & input[type="week"][disabled],
  & input[type="number"][disabled],
  & input[type="search"][disabled],
  & input[type="tel"][disabled],
  & input[type="color"][disabled],
  & select[disabled],
  & textarea[disabled] {
    cursor: not-allowed;
    background-color: #eaeded;
    color: #cad2d3;
  }

  /*
Need to separate out the :not() selector from the rest of the CSS 2.1 selectors
since IE8 won't execute CSS that contains a CSS3 selector.
*/
  & input:not([type])[disabled] {
    cursor: not-allowed;
    background-color: #eaeded;
    color: #cad2d3;
  }
  & input[readonly],
  & select[readonly],
  & textarea[readonly] {
    background-color: #eee; /* menu hover bg color */
    color: #777; /* menu text color */
    border-color: #ccc;
  }

  & input:focus:invalid,
  & textarea:focus:invalid,
  & select:focus:invalid {
    color: #b94a48;
    border-color: #e9322d;
  }
  & input[type="file"]:focus:invalid:focus,
  & input[type="radio"]:focus:invalid:focus,
  & input[type="checkbox"]:focus:invalid:focus {
    outline-color: #e9322d;
  }
  & select {
    /* Normalizes the height; padding is not sufficient. */
    height: 2.25em;
    border: 1px solid #ccc;
    background-color: white;
  }
  & select[multiple] {
    height: auto;
  }
  & label {
    margin: 0.5em 0 0.2em;
  }
  & fieldset {
    margin: 0;
    padding: 0.35em 0 0.75em;
    border: 0;
  }
  & legend {
    display: block;
    width: 100%;
    padding: 0.3em 0;
    margin-bottom: 0.3em;
    color: #333;
    border-bottom: 1px solid #e5e5e5;
  }
  ${props =>
    props.stacked
      ? `
  & input[type="text"],
  & input[type="password"],
  & input[type="email"],
  & input[type="url"],
  & input[type="date"],
  & input[type="month"],
  & input[type="time"],
  & input[type="datetime"],
  & input[type="datetime-local"],
  & input[type="week"],
  & input[type="number"],
  & input[type="search"],
  & input[type="tel"],
  & input[type="color"],
  & input[type="file"],
  & select,
  & label,
  & textarea {
    display: block;
    margin: 0.25em 0;
  }

  /*
Need to separate out the :not() selector from the rest of the CSS 2.1 selectors
since IE8 won't execute CSS that contains a CSS3 selector.
*/
  & input:not([type]) {
    display: block;
    margin: 0.25em 0;
  }`
      : ``};

  ${props =>
    props.aligned
      ? `
  & input,
& textarea,
& select,
/* NOTE: pure-help-inline is deprecated. Use .pure-form-message-inline instead. */
& .pure-help-inline,
.pure-form-message-inline {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    vertical-align: middle;
  }
  & textarea {
    vertical-align: top;
  }

  /* Aligned Forms */
  & .pure-control-group {
    margin-bottom: 0.5em;
  }
  & .pure-control-group label {
    text-align: right;
    display: inline-block;
    vertical-align: middle;
    width: 10em;
    margin: 0 1em 0 0;
  }
  & .pure-controls {
    margin: 1.5em 0 0 11em;
  }
  @media only screen and (max-width: 480px) {
  
    & .pure-control-group label {
      margin-bottom: 0.3em;
      text-align: left;
      display: block;
      width: 100%;
    }

    & .pure-controls {
      margin: 1.5em 0 0 0;
    }
  }
  `
      : ``};

  /* Rounded Inputs */
  & input.pure-input-rounded,
  & .pure-input-rounded {
    border-radius: 2em;
    padding: 0.5em 1em;
  }

  /* Grouped Inputs */
  & .pure-group fieldset {
    margin-bottom: 10px;
  }
  & .pure-group input,
  & .pure-group textarea {
    display: block;
    padding: 10px;
    margin: 0 0 -1px;
    border-radius: 0;
    position: relative;
    top: -1px;
  }
  & .pure-group input:focus,
  & .pure-group textarea:focus {
    z-index: 3;
  }
  & .pure-group input:first-child,
  & .pure-group textarea:first-child {
    top: 1px;
    border-radius: 4px 4px 0 0;
    margin: 0;
  }
  & .pure-group input:first-child:last-child,
  & .pure-group textarea:first-child:last-child {
    top: 1px;
    border-radius: 4px;
    margin: 0;
  }
  & .pure-group input:last-child,
  & .pure-group textarea:last-child {
    top: -2px;
    border-radius: 0 0 4px 4px;
    margin: 0;
  }
  & .pure-group button {
    margin: 0.35em 0;
  }

  /* Inline help for forms */
  /* NOTE: pure-help-inline is deprecated. Use .pure-form-message-inline instead. */
  & .pure-help-inline,
  .pure-form-message-inline {
    display: inline-block;
    padding-left: 0.3em;
    color: #666;
    vertical-align: middle;
    font-size: 0.875em;
  }

  /* Block help for forms */
  .pure-form-message {
    display: block;
    color: #666;
    font-size: 0.875em;
  }

  @media only screen and (max-width: 480px) {
    & button[type="submit"] {
      margin: 0.7em 0 0;
    }

    & input:not([type]),
    & input[type="text"],
    & input[type="password"],
    & input[type="email"],
    & input[type="url"],
    & input[type="date"],
    & input[type="month"],
    & input[type="time"],
    & input[type="datetime"],
    & input[type="datetime-local"],
    & input[type="week"],
    & input[type="number"],
    & input[type="search"],
    & input[type="tel"],
    & input[type="color"],
    & label {
      margin-bottom: 0.3em;
      display: block;
    }

    .pure-group input:not([type]),
    .pure-group input[type="text"],
    .pure-group input[type="password"],
    .pure-group input[type="email"],
    .pure-group input[type="url"],
    .pure-group input[type="date"],
    .pure-group input[type="month"],
    .pure-group input[type="time"],
    .pure-group input[type="datetime"],
    .pure-group input[type="datetime-local"],
    .pure-group input[type="week"],
    .pure-group input[type="number"],
    .pure-group input[type="search"],
    .pure-group input[type="tel"],
    .pure-group input[type="color"] {
      margin-bottom: 0;
    }

    /* NOTE: pure-help-inline is deprecated. Use &-message-inline instead. */
    & .pure-help-inline,
    & .pure-form-message-inline,
    & .pure-form-message {
      display: block;
      font-size: 0.75em;
      /* Increased bottom padding to make it group with its related input element. */
      padding: 0.2em 0 0.8em;
    }
  }
`;

Form.propTypes = {
  /**
   * Aligns form elements so that labels are right aligned (on the left)
   * and form inputs are left aligned (on the right).
   *
   * e.g.
   * ```md
   *    Label Here: []
   *  Longer Label: []
   * ```
   */
  aligned: PropTypes.boolean,

  /**
   * Stacks form inputs into 1 column (since <Form> defaults to inline elements)
   */
  stacked: PropTypes.boolean,

  /**
   * Automatically generated class name passed to component
   * from Styled Components
   */
  className: PropTypes.string.isRequired,

  /**
   * Child components (array or single element)
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

/** @component */
export default Form;
