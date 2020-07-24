import React, { PropsWithChildren, useContext } from "react";
import { Base, BaseProps } from "./Base";
import { ThemeContext } from "./Provider";

export interface ButtonProps extends BaseProps<HTMLButtonElement> {
  variant?: string;
}

export const Button = ({
  children,
  variant,
  ...restProps
}: PropsWithChildren<ButtonProps>) => {
  const context = useContext(ThemeContext);
  const classes =
    (variant && context.presets.button[variant]) ||
    context.presets.button.default;
  return (
    <Base as="button" className={classes} {...restProps}>
      {children}
    </Base>
  );
};
