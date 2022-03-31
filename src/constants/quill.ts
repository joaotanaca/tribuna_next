export const toolbar = {
    readonly: false,
    tabIndex: 1,
    height: "450px",
    width: "100%",
    // enableDragAndDropFileToEditor: true,
    // buttons: [
    //     "source",
    //     "|",
    //     "bold",
    //     "italic",
    //     "underline",
    //     "|",
    //     "ul",
    //     "ol",
    //     "|",
    //     "fontsize",
    //     "brush",
    //     "paragraph",
    //     "|",
    //     "image",
    //     "table",
    //     "link",
    //     "|",
    //     "left",
    //     "center",
    //     "right",
    //     "justify",
    //     "|",
    //     "indent",
    //     "outdent",
    //     "|",
    //     "undo",
    //     "redo",
    //     "|",
    //     "hr",
    //     "eraser",
    //     "fullsize",
    // ],
    uploader: { insertImageAsBase64URI: true },
    language: "pt",
    align: "justify",
    removeButtons: [
        "brush",
        "file",
        "font",
        "superscript",
        "subscript",
        "print",
        "about",
        "preview",
        "classSpan",
        "spellcheck",
        "symbol",
        "selectall",
        "hr",
    ],
    showXPathInStatusbar: false,
    showCharsCounter: false,
    showWordsCounter: false,
    spellcheck: true,
    toolbarAdaptive: true,
    toolbarSticky: true,
};
