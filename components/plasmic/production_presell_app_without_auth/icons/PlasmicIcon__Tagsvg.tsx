// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TagsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TagsvgIcon(props: TagsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"}>
        <path
          d={
            "M10.268 5.66c.3.299.788.299 1.089 0 .3-.298.3-.782 0-1.081a.774.774 0 00-1.09 0c-.3.299-.3.783 0 1.081z"
          }
        ></path>

        <path
          d={
            "M2.536 7.33a1.992 1.992 0 000 2.83l3.31 3.289c.786.781 2.06.781 2.847 0l4.69-4.66a2 2 0 00.589-1.401l.024-3.373A2.007 2.007 0 0011.975 2l-3.264.014a2.02 2.02 0 00-1.416.586zm.712 2.122a.996.996 0 010-1.415l4.76-4.73a1.01 1.01 0 01.707-.293L11.979 3a1.003 1.003 0 011.01 1.008l-.024 3.373a.997.997 0 01-.295.7l-4.689 4.66a1.01 1.01 0 01-1.423 0z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default TagsvgIcon;
/* prettier-ignore-end */
