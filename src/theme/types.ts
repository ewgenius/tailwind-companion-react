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
  };
}

export enum ThemeComponent {
  Button = "button",
  Typography = "typography",
}

export interface WithVariant<T = string> {
  variant?: "default" | T;
}
