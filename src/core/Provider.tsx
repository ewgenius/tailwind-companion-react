import { createContext } from "react";

export interface Theme {
  presets: {
    button: {
      default: string;
    };
  };
}

export const ThemeContext = createContext<Theme>({
  presets: {
    button: {
      default:
        "py-2 px-4 bg-gray-200 rounded-md hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:shadow-outline",
    },
  },
});
