import * as React from "react";
import {
  PlasmicSubmitButton,
  DefaultSubmitButtonProps
} from "./plasmic/production_presell_app_without_auth/PlasmicSubmitButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface SubmitButtonProps extends DefaultSubmitButtonProps {
  // Feel free to add any additional props that this component should receive
}
function SubmitButton_(props: SubmitButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicSubmitButton.useBehavior<SubmitButtonProps>(
    props,
    ref
  );
  return <PlasmicSubmitButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<SubmitButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<SubmitButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const SubmitButton = React.forwardRef(
  SubmitButton_
) as any as ButtonComponentType;

export default Object.assign(SubmitButton, { __plumeType: "button" });
