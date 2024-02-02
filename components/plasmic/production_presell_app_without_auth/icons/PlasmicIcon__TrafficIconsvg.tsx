// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TrafficIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TrafficIconsvgIcon(props: TrafficIconsvgIconProps) {
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

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15.111 15.994a.883.883 0 00.883-.883V.883A.883.883 0 0015.11 0H.883A.883.883 0 000 .883V15.11c0 .487.395.883.883.883H15.11zm-4.076 0V9.8h2.08l.31-2.414h-2.39v-1.54c0-.7.194-1.176 1.197-1.176h1.278V2.51c-.221-.029-.98-.094-1.863-.094-1.843 0-3.104 1.124-3.104 3.19v1.78H6.458V9.8h2.085v6.194h2.492z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TrafficIconsvgIcon;
/* prettier-ignore-end */
