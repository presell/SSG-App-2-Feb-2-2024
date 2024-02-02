import * as React from "react";
import {
  PlasmicCreateAsset,
  DefaultCreateAssetProps
} from "./plasmic/production_presell_app_without_auth/PlasmicCreateAsset";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface CreateAssetProps extends DefaultCreateAssetProps {
  // Feel free to add any additional props that this component should receive
}
function CreateAsset_(props: CreateAssetProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicCreateAsset.useBehavior<CreateAssetProps>(
    props,
    ref
  );
  return <PlasmicCreateAsset {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<CreateAssetProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<CreateAssetProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const CreateAsset = React.forwardRef(
  CreateAsset_
) as any as ButtonComponentType;

export default Object.assign(CreateAsset, { __plumeType: "button" });
