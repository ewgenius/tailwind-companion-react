import React from "react";
import { PropsWithChildren } from "react";
import { BasePropsWithAs, Base } from "./Base";
import { useThemePreset, ThemeComponent, WithVariant } from "../theme";

export interface TypographyProps
  extends BasePropsWithAs<
      HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement
    >,
    WithVariant {}

export const Typography = ({
  as,
  variant,
  children,
  ...restProps
}: PropsWithChildren<TypographyProps>) => {
  const classes = useThemePreset(ThemeComponent.Typography, variant);
  return (
    <Base as={as} className={classes} defaultAs="p" {...restProps}>
      {children}
    </Base>
  );
};
