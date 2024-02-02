import * as React from "react";
import {
  PlasmicToggleButton,
  DefaultToggleButtonProps
} from "./plasmic/production_presell_app_without_auth/PlasmicToggleButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface ToggleButtonProps extends DefaultToggleButtonProps {
  // Feel free to add any additional props that this component should receive
}
function ToggleButton_(props: ToggleButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicToggleButton.useBehavior<ToggleButtonProps>(
    props,
    ref
  );
  return <PlasmicToggleButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<ToggleButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<ToggleButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const ToggleButton = React.forwardRef(
  ToggleButton_
) as any as ButtonComponentType;

export default Object.assign(ToggleButton, { __plumeType: "button" });
