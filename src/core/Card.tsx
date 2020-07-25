import React, { PropsWithChildren } from "react";
import { Box, BoxProps } from "./Box";
import { WithVariant, ThemeComponent, useThemePreset } from "../theme";

export interface CardProps extends BoxProps<HTMLDivElement>, WithVariant {}

export interface CardProps extends BoxProps<HTMLDivElement> {}

export const Card = ({
  children,
  ...restProps
}: PropsWithChildren<CardProps>) => {
  const classes = useThemePreset(ThemeComponent.Card);
  return (
    <Box className={classes} {...restProps}>
      {children}
    </Box>
  );
};
