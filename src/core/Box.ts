import React, {
  PropsWithChildren,
  HTMLAttributes,
  ReactHTML,
  ClassAttributes,
} from "react";
import classnames from "classnames";

export interface SpacingProps {
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}

export interface FlexProps {
  flex?: boolean | "row" | "col";
  grow?: boolean;
  justify?: "start" | "center" | "end" | "between" | "around";
  content?: "start" | "center" | "end" | "between" | "around";
  items?: "stretch" | "start" | "center" | "end" | "Boxline";
}

export interface BoxProps<E extends HTMLElement>
  extends HTMLAttributes<E>,
    SpacingProps,
    FlexProps {
  className?: string;
  classNames?: string[];
}

export interface BoxPropsWithAs<E extends HTMLElement> extends BoxProps<E> {
  as?: keyof ReactHTML;
  defaultAs?: keyof ReactHTML;
}

function getUtilClasses(dict: {
  [cls: string]: number | string | undefined;
}): string[] {
  return Object.keys(dict).reduce((arr: string[], cls) => {
    const value = dict[cls];
    if (value !== undefined) {
      return [...arr, `${cls}-${value}`];
    }
    return arr;
  }, []);
}

export const Box = <P extends HTMLAttributes<E>, E extends HTMLElement>({
  as,
  defaultAs,
  children,
  className,
  classNames,
  // spacing
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  // flex
  flex,
  grow,
  justify,
  content,
  items,
  ...restProps
}: PropsWithChildren<BoxPropsWithAs<E> & ClassAttributes<E>>) => {
  const classes = classnames(
    className,
    classNames,
    {
      flex: !!flex,
      "flex-col": flex === "col",
      "flex-row": flex && flex !== "row",
      "flex-grow": grow,
      "flex-grow-0": grow === false,
    },
    getUtilClasses({
      p,
      px,
      py,
      pt,
      pb,
      pl,
      pr,
      m,
      mx,
      my,
      mt,
      mb,
      ml,
      mr,
      justify,
      content,
      items,
    })
  );

  const props = {
    className: classes,
    ...restProps,
  } as ClassAttributes<E> & P;
  return React.createElement<P, E>(as || defaultAs || "div", props, children);
};
