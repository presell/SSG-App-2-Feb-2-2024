import * as React from "react";
import {
  PlasmicConnectDomainButton,
  DefaultConnectDomainButtonProps
} from "./plasmic/production_presell_app_without_auth/PlasmicConnectDomainButton";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface ConnectDomainButtonProps
  extends DefaultConnectDomainButtonProps {
  // Feel free to add any additional props that this component should receive
}
function ConnectDomainButton_(props: ConnectDomainButtonProps, ref: ButtonRef) {
  const { plasmicProps } =
    PlasmicConnectDomainButton.useBehavior<ConnectDomainButtonProps>(
      props,
      ref
    );
  return <PlasmicConnectDomainButton {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<ConnectDomainButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<ConnectDomainButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const ConnectDomainButton = React.forwardRef(
  ConnectDomainButton_
) as any as ButtonComponentType;

export default Object.assign(ConnectDomainButton, { __plumeType: "button" });
