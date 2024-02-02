import * as React from "react";
import {
  PlasmicSelectButton,
  DefaultSelectButtonProps
} from "./plasmic/production_presell_app_without_auth/PlasmicSelectButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface SelectButtonProps extends DefaultSelectButtonProps {
  // Feel free to add any additional props that this component should receive
}
function SelectButton_(props: SelectButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicSelectButton.useBehavior<SelectButtonProps>(
    props,
    ref
  );
  return <PlasmicSelectButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<SelectButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<SelectButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const SelectButton = React.forwardRef(
  SelectButton_
) as any as ButtonComponentType;

export default Object.assign(SelectButton, { __plumeType: "button" });
