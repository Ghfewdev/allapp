"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("@/app/globals.css");
var fonts_1 = require("@/app/fonts");
exports.metadata = {
    title: "EIS MSD",
    description: "EIS MSD",
    icons: [
        {
            rel: "icon",
            url: "eis/favicon.ico"
        },
        {
            rel: "apple-touch-icon",
            url: "eis/apple-touch-icon.png"
        },
    ]
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: fonts_1.myFont.className }, children)));
}
exports["default"] = RootLayout;
