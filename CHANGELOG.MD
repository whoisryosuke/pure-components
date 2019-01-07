# v1.1.0 - Jan 6, 2019

- Dropdown upgraded. Now uses React state and JS mouse event like `onFocus` to allow for mouse and keyboard access to nested Dropdowns in Menu components. Accomplished by adding `active` state to the `<Menu>` class and passing it down to any nested `<Dropdown>` components using the new `addPropsToComponent` function.
- Factored out `<Menu.Item>` into separate file.
- Upgraded all Babel dev dependencies.

# v1.0.4 - Jan 6, 2019

- Dropdown displays by default, removed hoverable props

# v1.0.3 - Jan 4, 2019

- Changed main script to `src/index.js`
- Updated Getting Started with Unpkg CDN

# v1.0.2 - Jan 4, 2019

- `src` folder now part of NPM bundle

# v1.0.1 - Jan 4, 2019

- Added base export with `index.js`
- Moved Markdown docs to `src`, Styleguidist now exports to root level docs folder (to allow GHPages)

# v1.0.0 - Jan 4, 2019

- Cloned project from design-system-jss. Replaced JSS with Styled Components.
- Added all Pure CSS components as React Styled Components.
- Converted Pure CSS docs to compatible React version.
- Added stories for testing each component.
- Styled docs to look like Pure CSS + added extra pages
