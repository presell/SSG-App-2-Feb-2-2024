// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OfferIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OfferIconsvgIcon(props: OfferIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 48"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.398 32.982l1.661-1.187L9.503 44.29l30.852-18.604 1.66 1.98L9.504 47.061.398 32.982zm.627-6.775l1.265-.792 7.443 12.892 30.853-18.208 1.265 2.375-32.118 19-8.708-15.267zm-.401-7.164l32.909-19 9.5 16.454-32.91 19-9.5-16.454zm21.375-8.708a7.125 7.125 0 100 14.25 7.125 7.125 0 000-14.25zm3.277 11.624l-1.083.625-.595-1.03-1.139.443-.951.141-.418-1.467.991-.119 1.075-.422c.324-.19.559-.405.703-.649.145-.243.159-.476.04-.699-.12-.207-.33-.325-.628-.354l-1.18.11c-.696.145-1.308.16-1.838.044s-.952-.437-1.267-.963c-.286-.501-.37-1.017-.25-1.547.118-.53.447-1.028.987-1.494l-.601-1.04 1.075-.621.556.964.997-.411.793-.14.398 1.428-.733.097-1.12.454c-.347.21-.555.419-.624.627-.069.209-.054.392.045.552.096.176.293.274.59.294l1.319-.137c.783-.148 1.412-.138 1.887.03.476.17.854.506 1.136 1.01.29.502.376 1.03.257 1.586-.12.555-.475 1.078-1.067 1.57l.645 1.118z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OfferIconsvgIcon;
/* prettier-ignore-end */
