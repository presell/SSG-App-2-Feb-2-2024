// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TargetingIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TargetingIconsvgIcon(props: TargetingIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 22"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.02 2.01A4.944 4.944 0 0010 1C7.24 1 5 3.24 5 6s2.24 5 5 5 5-2.24 5-5m3.594 15c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TargetingIconsvgIcon;
/* prettier-ignore-end */
