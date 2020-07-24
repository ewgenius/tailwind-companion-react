import { useContext } from "react";
import { Theme, ThemeComponent } from "./types";
import { ThemeContext } from "./ThemeProvider";

export const getPreset = (
  theme: Theme,
  component: ThemeComponent.Button,
  variant = "default"
): string => {
  const value = theme.presets[component][variant];
  if (!value) {
    return "null";
  }
  if (typeof value === "function") {
    return value(theme);
  }
  return value;
};

export const useThemePreset = (
  component: ThemeComponent.Button,
  variant = "default"
) => {
  const theme = useContext(ThemeContext);
  return getPreset(theme, component, variant);
};
