import React, { PropsWithChildren } from "react";
import { Base, BaseProps } from "./Base";
import { ThemeComponent, useThemePreset } from "../theme";

export interface ButtonProps extends BaseProps<HTMLButtonElement> {
  variant?: string;
}

export const Button = ({
  children,
  variant,
  ...restProps
}: PropsWithChildren<ButtonProps>) => {
  const classes = useThemePreset(ThemeComponent.Button, variant);
  return (
    <Base as="button" className={classes} {...restProps}>
      {children}
    </Base>
  );
};
