// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ProductIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ProductIconsvgIcon(props: ProductIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.265 3.66c.3.3.788.3 1.089 0a.76.76 0 000-1.08.774.774 0 00-1.09 0 .76.76 0 000 1.08z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M1.535 5.33a1.992 1.992 0 000 2.83l3.31 3.289c.786.781 2.06.781 2.847 0l4.69-4.66a2 2 0 00.589-1.401l.024-3.373A2.007 2.007 0 0010.974 0L7.71.014A2.02 2.02 0 006.294.6L1.535 5.33zm.712 2.122a.996.996 0 010-1.415l4.76-4.73a1.01 1.01 0 01.707-.293L10.978 1a1.003 1.003 0 011.01 1.008l-.024 3.373a.997.997 0 01-.295.7l-4.689 4.66a1.01 1.01 0 01-1.423 0l-3.31-3.29z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ProductIconsvgIcon;
/* prettier-ignore-end */
