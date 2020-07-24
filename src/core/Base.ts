import React, {
  PropsWithChildren,
  HTMLAttributes,
  ReactHTML,
  ClassAttributes,
} from "react";

export interface BaseProps<E extends HTMLElement> extends HTMLAttributes<E> {
  className?: string;
  classNames?: string[];
}

export interface BasePropsWithAs<E extends HTMLElement> extends BaseProps<E> {
  as?: keyof ReactHTML;
  defaultAs?: keyof ReactHTML;
}

export const Base = <P extends HTMLAttributes<E>, E extends HTMLElement>({
  as,
  defaultAs,
  children,
  className,
  classNames,
  ...restProps
}: PropsWithChildren<BasePropsWithAs<E> & ClassAttributes<E>>) => {
  const props = {
    className:
      (className ? `${className} ` : "") +
        (classNames ? classNames.join(" ") : "") || null,
    ...restProps,
  } as ClassAttributes<E> & P;
  return React.createElement<P, E>(as || defaultAs || "div", props, children);
};
