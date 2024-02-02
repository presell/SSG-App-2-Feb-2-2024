// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 -0.5 25 25"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.818 6.664h-.001a1.847 1.847 0 111.306-.541 1.773 1.773 0 01-1.277.541h-.029zm-2.97 7.182h-.001a1.847 1.847 0 111.306-.541 1.773 1.773 0 01-1.278.541h-.031.002zM12 3.692h-.001a1.847 1.847 0 111.306-.541 1.773 1.773 0 01-1.277.541h-.029zM4.818 21.029h-.001a1.847 1.847 0 111.306-.541 1.769 1.769 0 01-1.276.541h-.031zM19.182 7.125a2.308 2.308 0 110-4.615 2.308 2.308 0 010 4.615zM12 24h-.001a1.847 1.847 0 111.306-.541 1.773 1.773 0 01-1.277.541h-.029zm10.154-9.231h-.048c-.75 0-1.428-.309-1.913-.807l-.001-.001c-.499-.503-.808-1.196-.808-1.961s.308-1.458.808-1.962a2.663 2.663 0 011.914-.808h.05-.003.048c.75 0 1.427.309 1.913.807l.001.001c.499.503.808 1.196.808 1.961s-.308 1.458-.808 1.962a2.664 2.664 0 01-1.915.809h-.049.002zm-2.971 7.643h-.05a3.097 3.097 0 01-2.236-.951l-.001-.001c-.584-.584-.945-1.391-.945-2.283s.361-1.698.945-2.283a3.106 3.106 0 012.234-.945h.054-.003.042c.877 0 1.67.362 2.237.944l.001.001c.588.582.952 1.39.952 2.283s-.364 1.7-.952 2.282a3.102 3.102 0 01-2.24.953h-.04z"
        }
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
