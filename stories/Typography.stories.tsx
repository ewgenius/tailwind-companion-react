import React from "react";
import { Typography, TypographyProps } from "../src";

export default {
  title: "Typography",
};

export const Default = (props?: Partial<TypographyProps>) => (
  <Typography {...props}>test Typography</Typography>
);

export const AsH1 = (props?: Partial<TypographyProps>) => (
  <Typography as="h1" {...props}>
    test Typography
  </Typography>
);
