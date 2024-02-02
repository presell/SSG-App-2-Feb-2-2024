import * as React from "react";
import {
  PlasmicHiddenTextInputEmail,
  DefaultHiddenTextInputEmailProps
} from "./plasmic/production_presell_app_without_auth/PlasmicHiddenTextInputEmail";

import { TextInputRef } from "@plasmicapp/react-web";

export interface HiddenTextInputEmailProps
  extends DefaultHiddenTextInputEmailProps {
  // Feel free to add any additional props that this component should receive
}
function HiddenTextInputEmail_(
  props: HiddenTextInputEmailProps,
  ref: TextInputRef
) {
  const { plasmicProps } =
    PlasmicHiddenTextInputEmail.useBehavior<HiddenTextInputEmailProps>(
      props,
      ref
    );
  return <PlasmicHiddenTextInputEmail {...plasmicProps} />;
}

const HiddenTextInputEmail = React.forwardRef(HiddenTextInputEmail_);

export default Object.assign(
  HiddenTextInputEmail,

  {
    __plumeType: "text-input"
  }
);
