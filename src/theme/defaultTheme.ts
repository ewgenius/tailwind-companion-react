import { Theme, ThemeComponent } from "./types";

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
