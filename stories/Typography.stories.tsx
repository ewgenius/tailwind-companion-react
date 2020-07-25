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

export const Default = (props?: Partial<TypographyProps>) => (
  <Typography {...props}>test Typography</Typography>
);

export const AsH1 = (props?: Partial<TypographyProps>) => (
  <Typography as="h1" {...props}>
    test Typography
  </Typography>
);

export const WithCustomTheme = (props?: Partial<TypographyProps>) => (
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
