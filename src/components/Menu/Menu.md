### Vertical Menu

Menus are vertical by default. Minimal default styling and low-specificity selectors make them easy to customize. By default, menu items take up 100% of the width of their container, so you may want to limit the menu width or set the menu to display:inline-block.

```js
<Menu>
  <Menu.Heading>BRAND</Menu.Heading>
  <Menu.List>
    <Menu.Item>
      <a href="#" className="link">
        News
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#" className="link">
        Sports
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#" className="link">
        Finance
      </a>
    </Menu.Item>
  </Menu.List>
</Menu>
```

### Horizontal Menu

To create a horizontal menu, add the horizontal prop.

Example:

```js
<Menu horizontal>
  <Menu.List>
    <Menu.Item>
      <a href="#" className="link">
        Selected
      </a>
    </Menu.Item>
    <Menu.Item hoverable>
      <a href="#" className="link">
        Dropdown
      </a>
      <Dropdown>
        <Menu.Item>Test</Menu.Item>
      </Dropdown>
    </Menu.Item>
  </Menu.List>
</Menu>
```

### Selected and Disabled Items

Mark a selected list element by adding the selected prop to the `<Menu.Item>` element. To mark a link as disabled, add an `<Menu.Item>` element with the disabled prop. Disabled items appear faded and do not inherit hover styles.

```js
<Menu horizontal>
  <Menu.List>
    <Menu.Item selected>
      <a href="#" className="link">
        Selected
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#" className="link">
        Normal
      </a>
    </Menu.Item>
    <Menu.Item disabled>Menu item 3</Menu.Item>
  </Menu.List>
</Menu>
```

### Dropdowns

We recommend enabling submenus via JavaScript to enable accessibility. To help get you started, an example script written in vanilla JS provides ARIA support, limited submenu arrow-key navigation, and the ability to dismiss menus with an outside event or the ESC key. But you may wish to go further by adding edge detection, comprehensive arrow-key navigation, and polyfills for compatibility with old browsers.

Even with JavaScript in place, you still might want to display submenus on hover. Just add hoverable prop to the `<Menu.List></Menu.List>`. This can be nice for desktop users and provides a fallback for users with no JavaScript.

```js
<Menu horizontal>
  <Menu.List>
    <Menu.Item>
      <a href="#" className="link">
        Selected
      </a>
    </Menu.Item>
    <Menu.Item hoverable>
      <a href="#" className="link">
        Dropdown
      </a>
      <Dropdown>
        <Menu.Item>Test</Menu.Item>
      </Dropdown>
    </Menu.Item>
  </Menu.List>
</Menu>
```

### Vertical Menu with Submenus

The same construct used to create dropdowns works in vertical menus as well. You may nest submenus, but keep in mind that complex menus can present usability challenges on small screens.

```js
<Menu style={{ width: "200px" }}>
  <Menu.List>
    <Menu.Item>
      <a href="#" className="link">
        Selected
      </a>
    </Menu.Item>
    <Menu.Item hoverable>
      <a href="#" className="link">
        Dropdown
      </a>
      <Dropdown>
        <Menu.Item hoverable>
          <a href="#" className="link">
            Dropdown
          </a>
          <Dropdown>
            <Menu.Item>
              <a href="#" className="link">
                Link 1
              </a>
            </Menu.Item>
          </Dropdown>
        </Menu.Item>
      </Dropdown>
    </Menu.Item>
  </Menu.List>
</Menu>
```

### Scrollable Horizontal Menu

To create a scrollable horizontal menu, add the scrollable prop. When there isn't enough room, the menu items can be scrolled or flicked. Dropdown menus are not supported.

```js
<Menu horizontal scrollable>
  <Menu.List>
    <Menu.Item>
      <a href="#" className="link">
        Selected
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#" className="link">
        Selected
      </a>
    </Menu.Item>
  </Menu.List>
</Menu>
```

### Scrollable Vertical Menu

To create a scrollable vertical menu, limit the height of your menu, and then add the scrollable prop. The menu items can be scrolled or flicked. Submenus are not supported.

```js
<Menu scrollable>
  <Menu.List>
    <Menu.Item>
      <a href="#" className="link">
        Selected
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#" className="link">
        Selected
      </a>
    </Menu.Item>
  </Menu.List>
</Menu>
```
