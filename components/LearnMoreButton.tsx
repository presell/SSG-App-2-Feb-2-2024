import * as React from "react";
import {
  PlasmicLearnMoreButton,
  DefaultLearnMoreButtonProps
} from "./plasmic/production_presell_app_without_auth/PlasmicLearnMoreButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface LearnMoreButtonProps extends DefaultLearnMoreButtonProps {
  // Feel free to add any additional props that this component should receive
}
function LearnMoreButton_(props: LearnMoreButtonProps, ref: ButtonRef) {
  const { plasmicProps } =
    PlasmicLearnMoreButton.useBehavior<LearnMoreButtonProps>(props, ref);
  return <PlasmicLearnMoreButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<LearnMoreButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<LearnMoreButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const LearnMoreButton = React.forwardRef(
  LearnMoreButton_
) as any as ButtonComponentType;

export default Object.assign(LearnMoreButton, { __plumeType: "button" });
