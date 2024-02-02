// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 36"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.814 1.465l2.354 1.717c.562.41 1.24.63 1.936.629l2.913-.006a2.42 2.42 0 012.307 1.676l.895 2.773A3.274 3.274 0 0030.415 9.9l2.36 1.708a2.42 2.42 0 01.882 2.713l-.906 2.769a3.272 3.272 0 000 2.035l.906 2.769a2.42 2.42 0 01-.881 2.712l-2.36 1.708a3.274 3.274 0 00-1.197 1.646l-.895 2.773a2.42 2.42 0 01-2.307 1.676l-2.913-.005a3.274 3.274 0 00-1.936.628l-2.354 1.717a2.42 2.42 0 01-2.852 0l-2.353-1.717a3.274 3.274 0 00-1.936-.628l-2.913.005a2.42 2.42 0 01-2.307-1.676l-.895-2.773a3.274 3.274 0 00-1.196-1.646l-2.36-1.708a2.42 2.42 0 01-.882-2.712l.906-2.77a3.273 3.273 0 000-2.034l-.906-2.77a2.42 2.42 0 01.881-2.712L4.361 9.9a3.274 3.274 0 001.197-1.646l.895-2.773A2.42 2.42 0 018.76 3.805l2.913.006a3.274 3.274 0 001.936-.63l2.353-1.716a2.42 2.42 0 012.852 0z"
        }
        stroke={"currentColor"}
        strokeWidth={".854"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
