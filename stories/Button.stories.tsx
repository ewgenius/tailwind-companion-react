import React from "react";
import { Button, Icon, ButtonProps, ThemeProvider, defaultTheme } from "../src";
import { PlusCircle } from "react-feather";

import { action } from "@storybook/addon-actions";

export default {
  title: "Button",
};

export const Default = () => (
  <Button onClick={action("click")}>default button</Button>
);

export const WithOverridedClass = () => (
  <Button className="border p-4 rounded-lg" onClick={action("click")}>
    default button
  </Button>
);

export const WithCustomClasses = () => (
  <Button
    classNames={[
      "text-gray-200",
      "bg-red-600",
      "hover:bg-red-700",
      "active:bg-red-800",
    ]}
    onClick={action("click")}
  >
    default button
  </Button>
);

export const WithCustomTheme = () => (
  <ThemeProvider
    theme={{
      ...defaultTheme,
      presets: {
        ...defaultTheme.presets,
        button: {
          default:
            "py-2 px-4 bg-gray-200 text-bold border hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:shadow-outline",
          primary:
            "py-2 px-4 text-white bg-blue-500 text-bold border hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:shadow-outline",
        },
      },
    }}
  >
    <Button onClick={action("click")} mb={2}>
      default button
    </Button>
    <Button variant="primary" onClick={action("click")}>
      primary button
    </Button>
  </ThemeProvider>
);

export const WithIcon = () => (
  <>
    <Button flex justify="center" items="center" mb={2}>
      <Icon icon={<PlusCircle size={20} />} />
    </Button>

    <Button flex justify="center" items="center" mb={2}>
      <Icon icon={<PlusCircle size={20} />} mr={1} />
      Icons left
    </Button>

    <Button flex justify="center" items="center" mb={2}>
      Icon right
      <Icon icon={<PlusCircle size={20} />} ml={1} />
    </Button>

    <Button
      flex
      justify="center"
      items="center"
      classNames={["text-red-600"]}
      mb={2}
    >
      <Icon icon={<PlusCircle size={20} />} mr={1} />
      Colored
    </Button>
  </>
);
