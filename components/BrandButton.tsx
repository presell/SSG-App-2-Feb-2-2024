import * as React from "react";
import {
  PlasmicBrandButton,
  DefaultBrandButtonProps
} from "./plasmic/production_presell_app_without_auth/PlasmicBrandButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface BrandButtonProps extends DefaultBrandButtonProps {
  // Feel free to add any additional props that this component should receive
}
function BrandButton_(props: BrandButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicBrandButton.useBehavior<BrandButtonProps>(
    props,
    ref
  );
  return <PlasmicBrandButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<BrandButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<BrandButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const BrandButton = React.forwardRef(
  BrandButton_
) as any as ButtonComponentType;

export default Object.assign(BrandButton, { __plumeType: "button" });
