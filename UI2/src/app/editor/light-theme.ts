import { EditorView } from '@codemirror/view';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';

const chalky = "#0070e1", coral = "#0070e1", cyan = "#0070e1", invalid = "#0070e1", ivory = "#0070e1", stone = "#0070e1",
malibu = "#0070e1", sage = "#0070e1", whiskey = "#0070e1", violet = "#0070e1", darkBackground = "#EEEEEE", highlightBackground = "#F2F2F2", background = "#FFFFFF", tooltipBackground = "#353a42", selection = "#DDE8F1", cursor = "#528bff";
const text = "#222222";

/**
The colors used in the theme, as CSS color strings.
*/
const color = {
    chalky,
    coral,
    cyan,
    invalid,
    ivory,
    stone,
    malibu,
    sage,
    whiskey,
    violet,
    darkBackground,
    highlightBackground,
    background,
    tooltipBackground,
    selection,
    cursor
};
/**
The editor theme styles for One Dark.
*/
const oneLightTheme = /*@__PURE__*/EditorView.theme({
    "&": {
        color: text,
        backgroundColor: background
    },
    ".cm-content": {
        caretColor: cursor
    },
    ".cm-cursor, .cm-dropCursor": { borderLeftColor: cursor },
    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: selection },
    ".cm-panels": { backgroundColor: darkBackground, color: ivory },
    ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" },
    ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" },
    ".cm-searchMatch": {
        backgroundColor: "#72a1ff59",
        outline: "1px solid #457dff"
    },
    ".cm-searchMatch.cm-searchMatch-selected": {
        backgroundColor: "#6199ff2f"
    },
    ".cm-activeLine": { backgroundColor: "#6699ff0b" },
    ".cm-selectionMatch": { backgroundColor: "#aafe661a" },
    "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
        backgroundColor: "#bad0f847"
    },
    ".cm-gutters": {
        backgroundColor: background,
        color: "#777",
        border: "none"
    },
    "&.cm-focused": {
        outline: "none"
    },
    ".cm-activeLineGutter": {
        backgroundColor: highlightBackground
    },
    ".cm-foldPlaceholder": {
        backgroundColor: "transparent",
        border: "none",
        color: "#ddd"
    },
    ".cm-tooltip": {
        border: "none",
        backgroundColor: tooltipBackground
    },
    ".cm-tooltip .cm-tooltip-arrow:before": {
        borderTopColor: "transparent",
        borderBottomColor: "transparent"
    },
    ".cm-tooltip .cm-tooltip-arrow:after": {
        borderTopColor: tooltipBackground,
        borderBottomColor: tooltipBackground
    },
    ".cm-tooltip-autocomplete": {
        "& > ul > li[aria-selected]": {
            backgroundColor: highlightBackground,
            color: ivory
        }
    }
}, { dark: false });
/**
The highlighting style for code in the One Light theme.
*/
const oneLightHighlightStyle = /*@__PURE__*/HighlightStyle.define([
    { tag: tags.keyword,
        color: violet },
    { tag: [tags.name, tags.deleted, tags.character, tags.propertyName, tags.macroName],
        color: coral },
    { tag: [/*@__PURE__*/tags.function(tags.variableName), tags.labelName],
        color: malibu },
    { tag: [tags.color, /*@__PURE__*/tags.constant(tags.name), /*@__PURE__*/tags.standard(tags.name)],
        color: whiskey },
    { tag: [/*@__PURE__*/tags.definition(tags.name), tags.separator],
        color: ivory },
    { tag: [tags.typeName, tags.className, tags.number, tags.changed, tags.annotation, tags.modifier, tags.self, tags.namespace],
        color: chalky },
    { tag: [tags.operator, tags.operatorKeyword, tags.url, tags.escape, tags.regexp, tags.link, /*@__PURE__*/tags.special(tags.string)],
        color: cyan },
    { tag: [tags.meta, tags.comment],
        color: stone },
    { tag: tags.strong,
        fontWeight: "bold" },
    { tag: tags.emphasis,
        fontStyle: "italic" },
    { tag: tags.strikethrough,
        textDecoration: "line-through" },
    { tag: tags.link,
        color: stone,
        textDecoration: "underline" },
    { tag: tags.heading,
        fontWeight: "bold",
        color: coral },
    { tag: [tags.atom, tags.bool, /*@__PURE__*/tags.special(tags.variableName)],
        color: whiskey },
    { tag: [tags.processingInstruction, tags.string, tags.inserted],
        color: sage },
    { tag: tags.invalid,
        color: invalid },
]);
/**
Extension to enable the One Dark theme (both the editor theme and
the highlight style).
*/
const oneLight = [oneLightTheme, /*@__PURE__*/syntaxHighlighting(oneLightHighlightStyle)];

export { color, oneLight, oneLightHighlightStyle, oneLightTheme };
