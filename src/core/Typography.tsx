import React from "react";
import { PropsWithChildren } from "react";
import { BasePropsWithAs, Base } from "./Base";

export interface TypographyProps
  extends BasePropsWithAs<
    HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement
  > {}

export const Typography = ({
  as,
  children,
  ...restProps
}: PropsWithChildren<TypographyProps>) => {
  return (
    <Base as={as} defaultAs="p" {...restProps}>
      {children}
    </Base>
  );
};
