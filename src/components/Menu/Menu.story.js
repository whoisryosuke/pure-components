import React from "react";
import { storiesOf } from "@storybook/react";

import Menu from "./Menu";
import Dropdown from "./Dropdown";

storiesOf("Menu", module)
  .add("with text", () => (
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
  ))
  .add("Horizontal Menu", () => (
    <Menu horizontal>
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
  ))
  .add("Selected and Disabled Items", () => (
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
  ))
  .add("Dropdown", () => (
    <Menu horizontal>
      <Menu.List>
        <Menu.Item>
          <a href="#" className="link">
            Selected
          </a>
        </Menu.Item>
        <Menu.Item hoverable selectable>
          <a href="#" className="link">
            Dropdown
          </a>
          <Dropdown>
            <Menu.Item>Test</Menu.Item>
          </Dropdown>
        </Menu.Item>
      </Menu.List>
    </Menu>
  ))
  .add("Multi-Layered Dropdown Vertical", () => (
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
  ));
