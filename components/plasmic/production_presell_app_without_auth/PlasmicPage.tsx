// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9KtuS1ThjHB8cDkxUpF5Nn
// Component: bTxEwWlxesEO

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import FintuneButton from "../../FintuneButton"; // plasmic-import: aFybP1G4-EBU/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_legacy_feed_page_designs_css from "../legacy_feed_page_designs/plasmic_legacy_feed_page_designs.module.css"; // plasmic-import: dMaiZmvKdpJ4pWYeCQn3zc/projectcss
import projectcss from "./plasmic_production_presell_app_without_auth.module.css"; // plasmic-import: 9KtuS1ThjHB8cDkxUpF5Nn/projectcss
import sty from "./PlasmicPage.module.css"; // plasmic-import: bTxEwWlxesEO/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: suacpCjRChpY/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: M3CUag-H_ns7/icon

createPlasmicElementProxy;

export type PlasmicPage__VariantMembers = {};
export type PlasmicPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicPage__VariantsArgs;
export const PlasmicPage__VariantProps = new Array<VariantPropType>();

export type PlasmicPage__ArgsType = {
  currentModel?: any;
  currentItem?: any;
  onEdit?: (pageId: string, pageType: string) => void;
};
type ArgPropType = keyof PlasmicPage__ArgsType;
export const PlasmicPage__ArgProps = new Array<ArgPropType>(
  "currentModel",
  "currentItem",
  "onEdit"
);

export type PlasmicPage__OverridesType = {
  page1?: Flex__<"div">;
  fintuneButton?: Flex__<typeof FintuneButton>;
  button?: Flex__<typeof AntdButton>;
};

export interface DefaultPageProps {
  currentModel?: any;
  currentItem?: any;
  onEdit?: (pageId: string, pageType: string) => void;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPage__RenderFunc(props: {
  variants: PlasmicPage__VariantsArgs;
  args: PlasmicPage__ArgsType;
  overrides: PlasmicPage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          currentModel: {
            id: "5",
            created_at: "2023-08-30T15:40:49.989Z",
            visits: "0",
            leads: null,
            spend: null,
            persona_who: "Elderly individuals with weakened joints",
            persona_problem: "Aging skin, weak joints, brittle nails",
            persona_solution:
              "Naturally restores youthfulness, strengthens body",
            page1_preview: "https://i.ibb.co/fXDQGyt/Loading-Article.gif",
            page1_url: null,
            page1_editor: null,
            page2_preview: "https://i.ibb.co/fXDQGyt/Loading-Article.gif",
            page2_url: null,
            page2_editor: null,
            ad1_cta: "Learn More",
            ad1_headline: "Old Age Bully Bashed by Amazing Discovery!",
            ad1_newsfeed:
              "Unleash the Fountain of Youth! \ud83d\udcaa Stronger Body in Days! \ud83d\udc75\u2192\ud83d\udc69 Roll Back the Years! \ud83d\udc85 Say Bye to Brittle Nails!",
            ad1_creative: "https://i.ibb.co/fXDQGyt/Loading-Article.gif",
            ad2_cta: null,
            ad2_headline: null,
            ad2_newsfeed: null,
            ad2_creative: null,
            email: "newuser@example.com",
            product_id: "28",
            product_name: "Collagen Supplement",
            product_thumbnail: "https://i.ibb.co/fXDQGyt/Loading-Article.gif",
            user_uid: "3816ca15-a8d7-4928-af00-1f7f5379abfa",
            brand_id: "1",
            brand_name: "Unknown Brand",
            brand_icon_light: "https://i.ibb.co/fXDQGyt/Loading-Article.gif",
            identifier: "recYKSK5MVLWfsVyX",
            ad1_description: "Revolutionary Age-Defying Solution Found!",
            ad2_description: null,
            page1_type: "Advertorial",
            page2_type: "Squeeze"
          },
          currentItem: {
            id: "14",
            created_at: "2023-09-05T22:25:47.352Z",
            model: "12",
            page_type: "Squeeze",
            page_name: "-",
            page_slug: null,
            page_url: "https://feed.presell.ai/squeeze/2/recqHwYNkoDCrBEN7",
            page_preview: "https://i.ibb.co/fXDQGyt/Loading-Article.gif",
            page_editor: null,
            identifier: "receHJou7ZEeMOY4t",
            cms: null
          }
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"page1"}
      data-plasmic-override={overrides.page1}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        plasmic_legacy_feed_page_designs_css.plasmic_tokens,
        sty.page1
      )}
    >
      <PlasmicImg__
        alt={""}
        className={classNames(sty.img___7Yzyu)}
        displayHeight={"12rem"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"24rem"}
        loading={"lazy"}
        src={
          $props?.currentItem?.page_preview
            ? $props?.currentItem?.page_preview
            : "https://i.ibb.co/fXDQGyt/Loading-Article.gife20"
        }
      />

      <div className={classNames(projectcss.all, sty.freeBox__optTu)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__fPKw6
          )}
        >
          <React.Fragment>{$props?.currentItem?.page_type}</React.Fragment>
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__jKif
          )}
        >
          {":"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___7CFJm
          )}
        >
          <React.Fragment>
            {$props?.currentItem?.page_name
              ? $props?.currentItem?.page_name
              : ""}
          </React.Fragment>
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__i6ZQp)}>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__cLu1Z)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"40px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/production_presell_app_without_auth/images/magicEditBtNsvg.svg",
            fullWidth: 150,
            fullHeight: 150,
            aspectRatio: 1
          }}
        />

        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__qqXo5)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"12px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/production_presell_app_without_auth/images/websvg.svg",
            fullWidth: 150,
            fullHeight: 150,
            aspectRatio: 1
          }}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___5Blod
          )}
          onClick={async event => {
            const $steps = {};

            $steps["goToPage"] = true
              ? (() => {
                  const actionArgs = {
                    destination: (() => {
                      try {
                        return $props.currentModel.data[0].page1_url;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()
                  };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToPage"] != null &&
              typeof $steps["goToPage"] === "object" &&
              typeof $steps["goToPage"].then === "function"
            ) {
              $steps["goToPage"] = await $steps["goToPage"];
            }
          }}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props?.currentItem?.page_url
                  ? $props?.currentItem?.page_url
                  : "";
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__cuxe8)}>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img__mgCrh)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"18px"}
          loading={"lazy"}
          src={{
            src: "/plasmic/production_presell_app_without_auth/images/magicEditBtNsvg.svg",
            fullWidth: 150,
            fullHeight: 150,
            aspectRatio: 1
          }}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__sGO0
          )}
        >
          {"Finetune Asset"}
        </div>
      </div>
      <FintuneButton
        data-plasmic-name={"fintuneButton"}
        data-plasmic-override={overrides.fintuneButton}
        className={classNames("__wab_instance", sty.fintuneButton)}
      />

      <div className={classNames(projectcss.all, sty.freeBox___81PZp)}>
        <AntdButton
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button)}
          onClick={async () => {
            const $steps = {};

            $steps["runCode"] = true
              ? (() => {
                  const actionArgs = {
                    customFunction: async () => {
                      return console.log("pt " + $props.currentItem.page_type);
                    }
                  };
                  return (({ customFunction }) => {
                    return customFunction();
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["runCode"] != null &&
              typeof $steps["runCode"] === "object" &&
              typeof $steps["runCode"].then === "function"
            ) {
              $steps["runCode"] = await $steps["runCode"];
            }

            $steps["runOnEdit"] = true
              ? (() => {
                  const actionArgs = {
                    eventRef: $props["onEdit"],
                    args: [
                      (() => {
                        try {
                          return $props.currentItem.id;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })(),
                      (() => {
                        try {
                          return $props.currentItem.page_type;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()
                    ]
                  };
                  return (({ eventRef, args }) => {
                    return eventRef?.(...(args ?? []));
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["runOnEdit"] != null &&
              typeof $steps["runOnEdit"] === "object" &&
              typeof $steps["runOnEdit"].then === "function"
            ) {
              $steps["runOnEdit"] = await $steps["runOnEdit"];
            }
          }}
          shape={"circle"}
          size={"small"}
          type={"link"}
        >
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__dp7U)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"50px"}
            loading={"lazy"}
            src={{
              src: "/plasmic/production_presell_app_without_auth/images/magicEditBtNsvg.svg",
              fullWidth: 150,
              fullHeight: 150,
              aspectRatio: 1
            }}
          />
        </AntdButton>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__rQtvc
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.currentItem.id;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  page1: ["page1", "fintuneButton", "button"],
  fintuneButton: ["fintuneButton"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  page1: "div";
  fintuneButton: typeof FintuneButton;
  button: typeof AntdButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPage__VariantsArgs;
    args?: PlasmicPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPage__ArgProps,
          internalVariantPropNames: PlasmicPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "page1") {
    func.displayName = "PlasmicPage";
  } else {
    func.displayName = `PlasmicPage.${nodeName}`;
  }
  return func;
}

export const PlasmicPage = Object.assign(
  // Top-level PlasmicPage renders the root element
  makeNodeComponent("page1"),
  {
    // Helper components rendering sub-elements
    fintuneButton: makeNodeComponent("fintuneButton"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicPage
    internalVariantProps: PlasmicPage__VariantProps,
    internalArgProps: PlasmicPage__ArgProps
  }
);

export default PlasmicPage;
/* prettier-ignore-end */
