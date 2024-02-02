// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DomainsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DomainsvgIcon(props: DomainsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 72 72"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        fill={"none"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeMiterlimit={"10"}
        strokeWidth={"2"}
      >
        <circle cx={"36"} cy={"36"} r={"28"}></circle>

        <path
          d={
            "M36 8v56c-8.56 0-15.5-12.536-15.5-28S27.44 8 36 8s15.5 12.536 15.5 28S44.56 64 36 64m28-28H8m52-14H12m48 28H12"
          }
        ></path>
      </g>
    </svg>
  );
}

export default DomainsvgIcon;
/* prettier-ignore-end */
