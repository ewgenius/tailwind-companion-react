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
