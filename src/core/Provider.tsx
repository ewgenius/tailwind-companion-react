import { createContext, useContext } from "react";

export type ThemeValue = ((theme: Theme) => string) | string;

export interface ComponentPreset {
  default: ThemeValue;
  [variant: string]: ThemeValue;
}

export interface Theme {
  palette: {
    textPrimary: ThemeValue;
    textSecondary: ThemeValue;
  };
  presets: {
    button: ComponentPreset;
  };
}

export enum ThemeComponent {
  Button = "button",
}

export const defaultTheme: Theme = {
  palette: {
    textPrimary: "text-gray-800",
    textSecondary: "text-gray-400",
  },
  presets: {
    [ThemeComponent.Button]: {
      default:
        "py-2 px-4 bg-gray-200 rounded-md hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:shadow-outline",
    },
  },
};

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

export const ThemeContext = createContext<Theme>(defaultTheme);
