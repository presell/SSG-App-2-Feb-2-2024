// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoutLightsvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoutLightsvg2Icon(props: LogoutLightsvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M256 73.825a182.178 182.178 0 00-182.18 182.18c0 100.617 81.567 182.171 182.18 182.171A182.18 182.18 0 00438.176 256 182.176 182.176 0 00256 73.825zm-18.096 86.221a18.099 18.099 0 0136.197 0v53.974a18.096 18.096 0 01-18.098 18.056 18.099 18.099 0 01-18.099-18.056v-53.974zM256 348.588a92.413 92.413 0 01-32.963-178.751v33.381a62.45 62.45 0 00-4.65 102.898 62.453 62.453 0 1070.581-102.898v-33.381A92.413 92.413 0 01256 348.588z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LogoutLightsvg2Icon;
/* prettier-ignore-end */
