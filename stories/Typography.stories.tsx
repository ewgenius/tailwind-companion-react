import React from "react";
import {
  Typography,
  TypographyProps,
  ThemeProvider,
  defaultTheme,
} from "../src";

export default {
  title: "Typography",
};

export const Default = () => <Typography>test Typography</Typography>;

export const AsH1 = () => <Typography as="h1">test Typography</Typography>;

export const WithCustomTheme = () => (
  <ThemeProvider
    theme={{
      ...defaultTheme,
      presets: {
        ...defaultTheme.presets,
        typography: {
          default: "text-gray-800",
          secondary: "text-gray-400 text-sm",
          header: "text-4xl font-bold",
        },
      },
    }}
  >
    <Typography as="h1" variant="header">
      Header
    </Typography>
    <Typography>default text</Typography>
    <Typography variant="secondary">secondary text</Typography>
  </ThemeProvider>
);
