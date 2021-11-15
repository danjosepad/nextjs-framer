import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (6324124)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text,Stack}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";const enabledGestures={"ElV12SOm9":{"hover":true}};const cycleOrder=["ElV12SOm9","JFMnkMMGE"];const variantClassNames={"ElV12SOm9":"framer-v-7qo74k","JFMnkMMGE":"framer-v-d7k4aa"};const humanReadableVariantMap={"Variant 1":"ElV12SOm9","Variant 2":"JFMnkMMGE"};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,layoutId,width,height,variant:outerVariant="ElV12SOm9",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"ElV12SOm9",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const variantProps=React.useMemo(()=>({"ElV12SOm9-hover":{"ElV12SOm9":{"center":false,"__contentWrapperStyle":{"width":"100%","height":"100%","padding":"0px 0px 0px 0px"}},"EGX94MfNl":{"center":false},"R4OLTazxU":{"center":false}},"JFMnkMMGE":{"ElV12SOm9":{"background":false,"onTap":undefined,"data-framer-name":"Variant 2","data-highlight":false}}}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const isDisplayed1=()=>{if(baseVariant==="JFMnkMMGE")return false;return true;};const isDisplayed2=()=>{if(baseVariant==="JFMnkMMGE")return false;return true;};const isDisplayed3=()=>{if(baseVariant==="JFMnkMMGE")return true;return false;};const isDisplayed4=()=>{if(baseVariant==="JFMnkMMGE")return true;return false;};const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-8KpcD",classNames),style:{"display":"contents","pointerEvents":"auto"},children:/*#__PURE__*/ _jsx(Stack,{...restProps,layoutId:"ElV12SOm9",className:cx("framer-7qo74k",className),style:{"borderBottomLeftRadius":8,"borderBottomRightRadius":8,"borderTopRightRadius":8,"borderTopLeftRadius":8,"backgroundColor":"transparent",...style},background:{"src":new URL("assets/yO2Fm5mzaMBHqQ7dDsopT1bFgc.jpeg",import.meta.url).href,"pixelWidth":612,"pixelHeight":408,"intrinsicWidth":612,"intrinsicHeight":408,"fit":"fill"},direction:"horizontal",distribution:"center",alignment:"end",gap:10,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"100%","height":"100%","padding":"0px 0px 0px 0px"},center:false,"data-framer-name":"Variant 1",variants:{"JFMnkMMGE":{"backgroundColor":"rgb(224, 242, 245)"}},transition:transition,ref:ref,...addVariantProps("ElV12SOm9"),children:/*#__PURE__*/ _jsxs(motion.div,{layoutId:"dQN5Obs4P",className:"framer-iwged0",style:{"borderTopLeftRadius":0,"borderTopRightRadius":0,"borderBottomRightRadius":8,"borderBottomLeftRadius":8,"background":"linear-gradient(180deg, rgba(108, 112, 116, 0) 0%, rgb(27, 28, 29) 100%)"},transition:transition,...addVariantProps("dQN5Obs4P"),children:[isDisplayed1()&&/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Bold\", \"Inter\", sans-serif","--framer-font-weight":700,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"24px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Bold"],layoutId:"EGX94MfNl",className:"framer-h8ekb4",rawHTML:"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style=''>Johm</span><br></div></div>",transition:transition,...addVariantProps("EGX94MfNl")}),isDisplayed2()&&/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Inter-Medium\", \"Inter\", sans-serif","--framer-font-weight":500,"--framer-text-color":"rgb(255, 255, 255)","--framer-font-size":"10px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["Inter-Medium"],layoutId:"R4OLTazxU",className:"framer-p0xo5u",rawHTML:"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style=''>2 days ago</span><br></div></div>",transition:transition,...addVariantProps("R4OLTazxU")}),isDisplayed3()&&/*#__PURE__*/ _jsx(motion.div,{layoutId:"oIPSJfS1J",className:"framer-wzt3c0",style:{"borderBottomLeftRadius":8,"borderBottomRightRadius":8,"borderTopRightRadius":8,"borderTopLeftRadius":8,"background":"linear-gradient(124deg, #E0F2F5 0%, hsl(0, 0%, 78%) 100%)"},transition:transition,...addVariantProps("oIPSJfS1J")}),isDisplayed4()&&/*#__PURE__*/ _jsx(motion.div,{layoutId:"smX_hf9xc",className:"framer-frvqql",style:{"borderBottomLeftRadius":8,"borderBottomRightRadius":8,"borderTopRightRadius":8,"borderTopLeftRadius":8,"background":"linear-gradient(124deg, #E0F2F5 0%, hsl(0, 0%, 78%) 100%)"},transition:transition,...addVariantProps("smX_hf9xc")})]})})})}));});const css=[".framer-8KpcD [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}",".framer-8KpcD * { box-sizing: border-box; }",".framer-8KpcD .framer-7qo74k { position: relative; overflow: visible; width: 226px; height: 296px; }",".framer-8KpcD .framer-iwged0 { position: relative; overflow: visible; width: 226px; height: 58px; flex: none; }",".framer-8KpcD .framer-h8ekb4 { position: absolute; overflow: visible; width: auto; height: auto; left: 19px; top: 7px; flex: none; white-space: pre; }",".framer-8KpcD .framer-p0xo5u { position: absolute; overflow: visible; width: auto; height: auto; left: 19px; top: 35px; flex: none; white-space: pre; }",".framer-8KpcD .framer-wzt3c0 { position: absolute; overflow: visible; width: 65px; height: 22px; left: 18px; top: 7px; flex: none; }",".framer-8KpcD .framer-frvqql { position: absolute; overflow: visible; width: 56px; height: 12px; left: 18px; top: 36px; flex: none; }",".framer-8KpcD.framer-v-7qo74k .framer-7qo74k { cursor: pointer; }",".framer-8KpcD.framer-v-7qo74k.hover .framer-7qo74k { width: 260px; height: 340px; }",".framer-8KpcD.framer-v-7qo74k.hover .framer-iwged0 { width: 260px; height: 88px; right: auto; bottom: auto; left: auto; top: auto; flex: none; }",".framer-8KpcD.framer-v-7qo74k.hover .framer-h8ekb4 { width: auto; height: auto; right: auto; bottom: auto; left: 19px; top: 28px; flex: none; white-space: pre; }",".framer-8KpcD.framer-v-7qo74k.hover .framer-p0xo5u { width: auto; height: auto; right: auto; bottom: auto; left: 19px; top: 56px; flex: none; white-space: pre; }",".framer-8KpcD.framer-v-d7k4aa .framer-7qo74k { cursor: auto; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 296
 * @framerIntrinsicWidth 226
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "wkzQt_3go": {"layout": ["fixed", "fixed"]}, "JFMnkMMGE": {"layout": ["fixed", "fixed"]}}}
 */ const FramerjKZisqOoh=withCSS(Component,css);export default FramerjKZisqOoh;FramerjKZisqOoh.displayName="Card";FramerjKZisqOoh.defaultProps={"width":226,"height":296};addPropertyControls(FramerjKZisqOoh,{"variant":{"type":ControlType.Enum,"title":"Variant","options":["ElV12SOm9","JFMnkMMGE"],"optionTitles":["Variant 1","Variant 2"]}});addFonts(FramerjKZisqOoh,[]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerjKZisqOoh","slots":[],"annotations":{"framerIntrinsicHeight":"296","framerIntrinsicWidth":"226","framerContractVersion":"1","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"wkzQt_3go\": {\"layout\": [\"fixed\", \"fixed\"]}, \"JFMnkMMGE\": {\"layout\": [\"fixed\", \"fixed\"]}}}"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./jKZisqOoh.map