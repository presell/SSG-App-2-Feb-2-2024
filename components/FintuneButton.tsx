import * as React from "react";
import {
  PlasmicFintuneButton,
  DefaultFintuneButtonProps
} from "./plasmic/production_presell_app_without_auth/PlasmicFintuneButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface FintuneButtonProps extends DefaultFintuneButtonProps {
  // Feel free to add any additional props that this component should receive
}
function FintuneButton_(props: FintuneButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicFintuneButton.useBehavior<FintuneButtonProps>(
    props,
    ref
  );
  return <PlasmicFintuneButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<FintuneButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<FintuneButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const FintuneButton = React.forwardRef(
  FintuneButton_
) as any as ButtonComponentType;

export default Object.assign(FintuneButton, { __plumeType: "button" });
