"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
function tele() {
    return (react_1["default"].createElement("div", { className: " grid justify-center text-center text-gray-800 bg-[#FFFFFF]" },
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("p", { className: ' text-5xl' }, "Telemedicine"),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null),
        react_1["default"].createElement(image_1["default"], { src: "/eis/teledash.jpg", alt: "logo10", width: 1200, height: 1200, className: ' border-2 border-black' })));
}
exports["default"] = tele;
