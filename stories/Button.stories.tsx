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

export const WithOverridedClass = (props?: Partial<ButtonProps>) => (
  <Button className="btn" onClick={action("click")} {...props}>
    test button
  </Button>
);

export const WithCustomClasses = (props?: Partial<ButtonProps>) => (
  <Button
    classNames={[
      "text-gray-200",
      "bg-red-600",
      "hover:bg-red-700",
      "active:bg-red-800",
    ]}
    onClick={action("click")}
    {...props}
  >
    test button
  </Button>
);
