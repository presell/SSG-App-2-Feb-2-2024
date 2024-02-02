import * as React from "react";
import {
  PlasmicTabButton,
  DefaultTabButtonProps
} from "./plasmic/production_presell_app_without_auth/PlasmicTabButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface TabButtonProps extends DefaultTabButtonProps {
  // Feel free to add any additional props that this component should receive
}
function TabButton_(props: TabButtonProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicTabButton.useBehavior<TabButtonProps>(
    props,
    ref
  );
  return <PlasmicTabButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<TabButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<TabButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const TabButton = React.forwardRef(TabButton_) as any as ButtonComponentType;

export default Object.assign(TabButton, { __plumeType: "button" });
