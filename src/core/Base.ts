import React, {
  PropsWithChildren,
  HTMLAttributes,
  ReactHTML,
  ClassAttributes,
} from "react";

export interface TailwindSpacingProps {
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

export interface BaseProps<E extends HTMLElement>
  extends HTMLAttributes<E>,
    TailwindSpacingProps {
  className?: string;
  classNames?: string[];
}

export interface BasePropsWithAs<E extends HTMLElement> extends BaseProps<E> {
  as?: keyof ReactHTML;
  defaultAs?: keyof ReactHTML;
}

function getUtilClasses(dict: { [cls: string]: number | undefined }): string {
  return Object.keys(dict)
    .reduce((arr: string[], cls) => {
      const value = dict[cls];
      if (value !== undefined) {
        return [...arr, `${cls}-${value}`];
      }
      return arr;
    }, [])
    .join(" ");
}

export const Base = <P extends HTMLAttributes<E>, E extends HTMLElement>({
  as,
  defaultAs,
  children,
  className,
  classNames,
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
  ...restProps
}: PropsWithChildren<BasePropsWithAs<E> & ClassAttributes<E>>) => {
  const classes =
    (className ? `${className} ` : "") +
    (classNames ? classNames.join(" ") : "");

  const utilClasses = getUtilClasses({
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
  });

  const props = {
    className: classes + (utilClasses ? ` ${utilClasses}` : "") || null,
    ...restProps,
  } as ClassAttributes<E> & P;
  return React.createElement<P, E>(as || defaultAs || "div", props, children);
};
