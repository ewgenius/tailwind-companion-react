import React from "react";
import { PropsWithChildren } from "react";
import { BoxPropsWithAs, Box } from "./Box";
import { useThemePreset, ThemeComponent, WithVariant } from "../theme";

export interface TypographyProps
  extends BoxPropsWithAs<
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
    <Box as={as} className={classes} defaultAs="p" {...restProps}>
      {children}
    </Box>
  );
};
