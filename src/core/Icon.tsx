import React from "react";
import { BoxProps, Box } from "./Box";

export interface IconProps extends BoxProps<HTMLDivElement> {
  icon: React.ReactNode;
}

export const Icon = ({ icon, ...restProps }: IconProps) => {
  return (
    <Box as={"div"} className="stroke-current" {...restProps}>
      {icon}
    </Box>
  );
};
