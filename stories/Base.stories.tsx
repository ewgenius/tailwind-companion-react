import React from "react";
import { Base, BaseProps } from "../src";

export default {
  title: "Base",
};

export const AsDiv = (props?: Partial<BaseProps<HTMLDivElement>>) => (
  <Base {...props}>test Base</Base>
);

export const AsDivWithUtilityProperties = (
  props?: Partial<BaseProps<HTMLDivElement>>
) => (
  <Base className="bg-red-400 w-20" flex py={8} px={4} ml={2} mt={4} {...props}>
    <Base grow={false}>1</Base>
    <Base grow>2</Base>
    <div>3</div>
  </Base>
);

export const AsButton = (props?: Partial<BaseProps<HTMLButtonElement>>) => (
  <Base as="button" onClick={() => console.log("click")} {...props}>
    test Base
  </Base>
);
