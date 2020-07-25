import React, { PropsWithChildren } from "react";
import { Base, BaseProps } from "./Base";
import { WithVariant, ThemeComponent, useThemePreset } from "../theme";

export interface CardProps extends BaseProps<HTMLDivElement>, WithVariant {}

export interface CardProps extends BaseProps<HTMLDivElement> {}

export const Card = ({
  children,
  ...restProps
}: PropsWithChildren<CardProps>) => {
  const classes = useThemePreset(ThemeComponent.Card);
  return (
    <Base className={classes} {...restProps}>
      {children}
    </Base>
  );
};
