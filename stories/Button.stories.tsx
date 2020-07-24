import React from "react";
import { Button, ButtonProps, ThemeContext, defaultTheme } from "../src";

import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
};

export const Default = (props?: Partial<ButtonProps>) => (
  <Button onClick={action("click")} {...props}>
    default button
  </Button>
);

export const WithOverridedClass = (props?: Partial<ButtonProps>) => (
  <Button
    className="border p-4 rounded-lg"
    onClick={action("click")}
    {...props}
  >
    default button
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
    default button
  </Button>
);

export const WithCustomTheme = (props?: Partial<ButtonProps>) => (
  <ThemeContext.Provider
    value={{
      ...defaultTheme,
      presets: {
        button: {
          default:
            "py-2 px-4 bg-gray-200 text-bold border hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:shadow-outline",
          primary:
            "py-2 px-4 text-white bg-blue-500 text-bold border hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:shadow-outline",
        },
      },
    }}
  >
    <Button onClick={action("click")} classNames={["mr-2"]} {...props}>
      default button
    </Button>
    <Button variant="primary" onClick={action("click")} {...props}>
      primary button
    </Button>
  </ThemeContext.Provider>
);
