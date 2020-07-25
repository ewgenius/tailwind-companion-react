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
    [ThemeComponent.Button]: ComponentPreset;
    [ThemeComponent.Typography]: ComponentPreset;
    [ThemeComponent.Card]: ComponentPreset;
  };
}

export enum ThemeComponent {
  Button = "button",
  Typography = "typography",
  Card = "card",
}

export interface WithVariant<T = string> {
  variant?: "default" | T;
}
