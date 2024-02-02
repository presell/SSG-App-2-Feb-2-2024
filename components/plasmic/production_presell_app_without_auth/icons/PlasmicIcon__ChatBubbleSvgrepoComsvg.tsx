// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChatBubbleSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChatBubbleSvgrepoComsvgIcon(
  props: ChatBubbleSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 15 15"}
      fill={"none"}
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
          "M12.5 3h-10A1.5 1.5 0 001 4.5v5A1.5 1.5 0 002.5 11h5a.5.5 0 01.354.146L10 13.293V11.5a.5.5 0 01.5-.5h2A1.5 1.5 0 0014 9.5v-5A1.5 1.5 0 0012.5 3zm-10-1h10A2.5 2.5 0 0115 4.5v5a2.5 2.5 0 01-2.5 2.5H11v2.5a.5.5 0 01-.854.354L7.293 12H2.5A2.5 2.5 0 010 9.5v-5A2.5 2.5 0 012.5 2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChatBubbleSvgrepoComsvgIcon;
/* prettier-ignore-end */
