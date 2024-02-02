// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9KtuS1ThjHB8cDkxUpF5Nn
// Component: jko7g0l6GA9g

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

import TextInput from "../../TextInput"; // plasmic-import: 5RnRMWLMy77V/component
import { Embed } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_legacy_feed_page_designs_css from "../legacy_feed_page_designs/plasmic_legacy_feed_page_designs.module.css"; // plasmic-import: dMaiZmvKdpJ4pWYeCQn3zc/projectcss
import projectcss from "./plasmic_production_presell_app_without_auth.module.css"; // plasmic-import: 9KtuS1ThjHB8cDkxUpF5Nn/projectcss
import sty from "./PlasmicEditable.module.css"; // plasmic-import: jko7g0l6GA9g/css

createPlasmicElementProxy;

export type PlasmicEditable__VariantMembers = {
  editEnabled: "editEnabled";
};
export type PlasmicEditable__VariantsArgs = {
  editEnabled?: SingleBooleanChoiceArg<"editEnabled">;
};
type VariantPropType = keyof PlasmicEditable__VariantsArgs;
export const PlasmicEditable__VariantProps = new Array<VariantPropType>(
  "editEnabled"
);

export type PlasmicEditable__ArgsType = {
  children?: React.ReactNode;
  edit2?: React.ReactNode;
};
type ArgPropType = keyof PlasmicEditable__ArgsType;
export const PlasmicEditable__ArgProps = new Array<ArgPropType>(
  "children",
  "edit2"
);

export type PlasmicEditable__OverridesType = {
  root?: Flex__<"div">;
  embedHtml?: Flex__<typeof Embed>;
};

export interface DefaultEditableProps {
  children?: React.ReactNode;
  edit2?: React.ReactNode;
  editEnabled?: SingleBooleanChoiceArg<"editEnabled">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicEditable__RenderFunc(props: {
  variants: PlasmicEditable__VariantsArgs;
  args: PlasmicEditable__ArgsType;
  overrides: PlasmicEditable__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "editEnabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.editEnabled
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
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
        sty.root,
        {
          [sty.rooteditEnabled]: hasVariant(
            $state,
            "editEnabled",
            "editEnabled"
          )
        }
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          sty.freeBox__fz1Bw,
          "editableText",
          {
            [sty.freeBoxeditEnabled__fz1Bw34R5V]: hasVariant(
              $state,
              "editEnabled",
              "editEnabled"
            )
          }
        )}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__u6L2J
              )}
            >
              {"Enter some text"}
            </div>
          ),
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildreneditEnabled]: hasVariant(
              $state,
              "editEnabled",
              "editEnabled"
            )
          })
        })}
      </div>
      <div
        className={classNames(
          projectcss.all,
          sty.freeBox__cqmxo,
          "textEditor",
          {
            [sty.freeBoxeditEnabled__cqmxo34R5V]: hasVariant(
              $state,
              "editEnabled",
              "editEnabled"
            )
          }
        )}
      >
        {(hasVariant($state, "editEnabled", "editEnabled") ? true : false)
          ? renderPlasmicSlot({
              defaultContents: (
                <TextInput
                  className={classNames("__wab_instance", sty.textInput__qe9Xl)}
                  endIcon={null}
                  startIcon={null}
                />
              ),

              value: args.edit2
            })
          : null}
      </div>
      <Embed
        data-plasmic-name={"embedHtml"}
        data-plasmic-override={overrides.embedHtml}
        className={classNames("__wab_instance", sty.embedHtml, {
          [sty.embedHtmleditEnabled]: hasVariant(
            $state,
            "editEnabled",
            "editEnabled"
          )
        })}
        code={
          "<script>\n  (() => {\n    const hoverBorderColor = '1px solid black';\n    const hoverBackgroundColor = '#F3F9FF';\n\n    var editIcon = document.createElement('div');\n    editIcon.className = 'edit-icon';\n    editIcon.textContent = '\u270e';\n    editIcon.style.display = 'none';\n\n    const currentScript = document.currentScript;\n    const editableTextWrapper =\n      currentScript.parentElement.parentElement.querySelector('.editableText');\n    const textEditorWrapper =\n      currentScript.parentElement.parentElement.querySelector('.textEditor');\n    const textEditorInput = textEditorWrapper.querySelector('input') || textEditorWrapper.querySelector('textarea');\n\n    if (!editableTextWrapper || !textEditorWrapper || !textEditorInput) {\n      console.error(\n        'Could not find editableTextWrapper, textEditorWrapper, or textEditorInput',\n      );\n      return;\n    }\n\n    editableTextWrapper.parentElement.appendChild(editIcon);\n\n    const showElement = (element) => {\n      element.style.opacity = 1;\n      element.style.height = 'auto';\n      element.style.width = 'auto';\n    };\n\n    const hideElement = (element) => {\n      element.style.opacity = 0;\n      element.style.height = '0px';\n      element.style.width = '0px';\n    };\n\n    editableTextWrapper.addEventListener('mouseover', function () {\n      editableTextWrapper.style.border = hoverBorderColor;\n      editableTextWrapper.style.backgroundColor = hoverBackgroundColor;\n      editableTextWrapper.style.borderRadius = '4px';\n      editIcon.style.display = 'inline';\n    });\n\n    editableTextWrapper.addEventListener('mouseout', function () {\n      editableTextWrapper.style.border = 'none';\n      editableTextWrapper.style.backgroundColor = 'transparent';\n      editIcon.style.display = 'none';\n    });\n\n    editableTextWrapper.addEventListener('click', function () {\n      textEditorInput.focus();\n      const width = editableTextWrapper.clientWidth;\n      const height = editableTextWrapper.clientHeight;\n      showElement(textEditorWrapper);\n      hideElement(editableTextWrapper);\n      textEditorWrapper.style.width = width + 'px';\n      textEditorWrapper.style.height = height + 'px';\n    });\n\n    textEditorInput.addEventListener('blur', function () {\n      showElement(editableTextWrapper);\n      hideElement(textEditorWrapper);\n    });\n\n    textEditorInput.addEventListener('keydown', function (event) {      \n      if (event.keyCode === 27) {\n        textEditorInput.blur();\n      }\n    });\n  })();\n</script>\n"
        }
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "embedHtml"],
  embedHtml: ["embedHtml"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  embedHtml: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEditable__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEditable__VariantsArgs;
    args?: PlasmicEditable__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicEditable__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicEditable__ArgsType,
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
          internalArgPropNames: PlasmicEditable__ArgProps,
          internalVariantPropNames: PlasmicEditable__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicEditable__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEditable";
  } else {
    func.displayName = `PlasmicEditable.${nodeName}`;
  }
  return func;
}

export const PlasmicEditable = Object.assign(
  // Top-level PlasmicEditable renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    embedHtml: makeNodeComponent("embedHtml"),

    // Metadata about props expected for PlasmicEditable
    internalVariantProps: PlasmicEditable__VariantProps,
    internalArgProps: PlasmicEditable__ArgProps
  }
);

export default PlasmicEditable;
/* prettier-ignore-end */
