import React from "react";
import { Base, BaseProps } from "../src";

export default {
  title: "Base",
};

export const AsDiv = (props?: Partial<BaseProps<HTMLDivElement>>) => (
  <Base {...props}>test Base</Base>
);

export const AsButton = (props?: Partial<BaseProps<HTMLButtonElement>>) => (
  <Base as="button" onClick={() => console.log("click")} {...props}>
    test Base
  </Base>
);
