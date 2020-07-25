import React, { PropsWithChildren } from "react";
import { Base, BaseProps } from "./Base";
import { ThemeComponent, useThemePreset, WithVariant } from "../theme";

export interface ButtonProps
  extends BaseProps<HTMLButtonElement>,
    WithVariant {}

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
