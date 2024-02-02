// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 39"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.781.547c1-.73 2.356-.73 3.356 0l2.807 2.048a2.847 2.847 0 001.683.547l3.475-.007a2.847 2.847 0 012.715 1.972l1.067 3.307c.186.576.55 1.077 1.04 1.432l2.816 2.037a2.847 2.847 0 011.037 3.191l-1.08 3.303a2.847 2.847 0 000 1.77l1.08 3.303a2.847 2.847 0 01-1.037 3.191l-2.816 2.037c-.49.355-.854.856-1.04 1.432l-1.067 3.307a2.847 2.847 0 01-2.715 1.972l-3.475-.006a2.847 2.847 0 00-1.683.546l-2.807 2.048c-1 .73-2.356.73-3.356 0l-2.807-2.047a2.847 2.847 0 00-1.683-.547l-3.475.006A2.847 2.847 0 016.1 33.417L5.034 30.11a2.847 2.847 0 00-1.04-1.432l-2.816-2.037A2.847 2.847 0 01.141 23.45l1.08-3.303a2.847 2.847 0 000-1.77l-1.08-3.303a2.847 2.847 0 011.037-3.19l2.815-2.038c.49-.355.855-.856 1.04-1.432l1.068-3.307a2.847 2.847 0 012.715-1.972l3.475.007a2.847 2.847 0 001.683-.547L16.78.547z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
