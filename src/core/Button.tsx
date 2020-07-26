import React, { PropsWithChildren } from "react";
import { Box, BoxProps } from "./Box";
import { ThemeComponent, useThemePreset, WithVariant } from "../theme";

export interface ButtonProps extends BoxProps<HTMLButtonElement>, WithVariant {}

export const Button = ({
  children,
  variant,
  ...restProps
}: PropsWithChildren<ButtonProps>) => {
  const classes = useThemePreset(ThemeComponent.Button, variant);
  return (
    <Box as="button" className={classes} {...restProps}>
      {children}
    </Box>
  );
};
