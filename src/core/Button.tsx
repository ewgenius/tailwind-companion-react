import React, { PropsWithChildren, useContext } from "react";
import { Base, BaseProps } from "./Base";
import { ThemeContext } from "./Provider";

export interface ButtonProps extends BaseProps<HTMLButtonElement> {}

export const Button = ({
  children,
  ...restProps
}: PropsWithChildren<ButtonProps>) => {
  const context = useContext(ThemeContext);
  return (
    <Base
      as="button"
      className={context && context.presets.button.default}
      {...restProps}
    >
      {children}
    </Base>
  );
};
