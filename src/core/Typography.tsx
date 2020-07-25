import React from "react";
import { PropsWithChildren } from "react";
import { BasePropsWithAs, Base } from "./Base";
import { useThemePreset, ThemeComponent } from "../theme";

export interface TypographyProps
  extends BasePropsWithAs<
    HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement
  > {}

export const Typography = ({
  as,
  children,
  ...restProps
}: PropsWithChildren<TypographyProps>) => {
  const classes = useThemePreset(ThemeComponent.Typography);
  return (
    <Base as={as} className={classes} defaultAs="p" {...restProps}>
      {children}
    </Base>
  );
};
