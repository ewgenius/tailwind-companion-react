import React from "react";
import { createContext, PropsWithChildren } from "react";
import { Theme } from "./types";
import { defaultTheme } from "./defaultTheme";

export const ThemeContext = createContext<Theme>(defaultTheme);

export interface ThemeProviderProps {
  theme: Theme;
}

export const ThemeProvider = ({
  theme,
  children,
}: PropsWithChildren<ThemeProviderProps>) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);
