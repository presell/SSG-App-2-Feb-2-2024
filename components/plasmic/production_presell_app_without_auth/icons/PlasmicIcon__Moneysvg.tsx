// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoneysvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoneysvgIcon(props: MoneysvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 76 76"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.4 47.981l1.66-1.187 7.444 12.496 30.852-18.604 1.661 1.979L25.504 62.06zm.626-6.776l1.265-.791 7.444 12.892 30.852-18.209 1.265 2.375-32.117 19zm-.401-7.163l32.909-19 9.5 16.454-32.909 19zM38 25.333a7.125 7.125 0 100 14.25 7.125 7.125 0 000-14.25zm3.278 11.625l-1.083.625-.596-1.03-1.138.443-.952.14-.418-1.466.991-.119 1.075-.422c.324-.19.559-.406.704-.649s.158-.476.04-.699c-.12-.207-.33-.325-.628-.354l-1.181.11c-.696.145-1.308.16-1.838.044-.529-.116-.951-.437-1.266-.963-.287-.501-.37-1.017-.251-1.547.118-.53.448-1.028.987-1.494l-.601-1.041 1.075-.62.557.964.997-.412.792-.14.398 1.429-.732.097-1.122.454c-.346.21-.554.418-.623.627-.069.208-.054.392.045.552.096.176.293.274.59.294l1.32-.137c.782-.148 1.412-.138 1.887.03.475.17.853.505 1.136 1.01.29.502.375 1.03.256 1.585-.12.556-.475 1.079-1.067 1.57z"
        }
      ></path>
    </svg>
  );
}

export default MoneysvgIcon;
/* prettier-ignore-end */
