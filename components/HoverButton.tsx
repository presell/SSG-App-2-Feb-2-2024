import * as React from "react";
import {
  PlasmicHoverButton,
  DefaultHoverButtonProps
} from "./plasmic/production_presell_app_without_auth/PlasmicHoverButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface HoverButtonProps extends DefaultHoverButtonProps {
  // Feel free to add any additional props that this component should receive
}
function HoverButton_(props: HoverButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicHoverButton.useBehavior<HoverButtonProps>(
    props,
    ref
  );
  return <PlasmicHoverButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<HoverButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<HoverButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const HoverButton = React.forwardRef(
  HoverButton_
) as any as ButtonComponentType;

export default Object.assign(HoverButton, { __plumeType: "button" });
