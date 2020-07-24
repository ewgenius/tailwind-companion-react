import React, { PropsWithChildren } from "react";
import { Base, BaseProps } from "./Base";

export interface ButtonProps extends BaseProps<HTMLButtonElement> {}

export const Button = ({
  children,
  ...restProps
}: PropsWithChildren<ButtonProps>) => (
  <Base as="button" {...restProps}>
    {children}
  </Base>
);
