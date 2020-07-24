import React from "react";
import { Button, ButtonProps } from "../src";

import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
};

export const Default = (props?: Partial<ButtonProps>) => (
  <Button onClick={action("click")} {...props}>
    test button
  </Button>
);

export const WithClass = (props?: Partial<ButtonProps>) => (
  <Button className="btn" onClick={action("click")} {...props}>
    test button
  </Button>
);

export const WithClasses = (props?: Partial<ButtonProps>) => (
  <Button
    classNames={["btn", "btn-primary"]}
    onClick={action("click")}
    {...props}
  >
    test button
  </Button>
);
