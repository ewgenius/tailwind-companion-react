import React from "react";
import { BaseProps, Base } from "./Base";

export interface IconProps extends BaseProps<HTMLDivElement> {
  icon: React.ReactNode;
}

export const Icon = ({ icon, ...restProps }: IconProps) => {
  return (
    <Base as={"div"} className="stroke-current" {...restProps}>
      {icon}
    </Base>
  );
};
