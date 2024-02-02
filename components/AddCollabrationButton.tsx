import * as React from "react";
import {
  PlasmicAddCollabrationButton,
  DefaultAddCollabrationButtonProps
} from "./plasmic/production_presell_app_without_auth/PlasmicAddCollabrationButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface AddCollabrationButtonProps
  extends DefaultAddCollabrationButtonProps {
  // Feel free to add any additional props that this component should receive
}
function AddCollabrationButton_(
  props: AddCollabrationButtonProps,
  ref: ButtonRef
) {
  const { plasmicProps } =
    PlasmicAddCollabrationButton.useBehavior<AddCollabrationButtonProps>(
      props,
      ref
    );
  return <PlasmicAddCollabrationButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<AddCollabrationButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<AddCollabrationButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const AddCollabrationButton = React.forwardRef(
  AddCollabrationButton_
) as any as ButtonComponentType;

export default Object.assign(AddCollabrationButton, { __plumeType: "button" });
