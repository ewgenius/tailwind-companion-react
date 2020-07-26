import React from "react";
import { Box, BoxProps } from "../src";

export default {
  title: "Box",
};

export const AsDiv = (props?: Partial<BoxProps<HTMLDivElement>>) => (
  <Box {...props}>test Box</Box>
);

export const AsDivWithUtilityProperties = () => (
  <Box className="bg-red-400 w-20" flex py={8} px={4} ml={2} mt={4}>
    <Box grow={false}>1</Box>
    <Box grow>2</Box>
    <div>3</div>
  </Box>
);

export const AsButton = () => (
  <Box as="button" onClick={() => console.log("click")}>
    test Box
  </Box>
);
