'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
// import logo from '../public/logo.png'
var health_png_1 = require("../public/health.png");
var data_png_1 = require("../public/data.png");
var budget_png_1 = require("../public/budget.png");
var search_0_png_1 = require("../public/search_0.png");
var bhz_png_1 = require("../public/bhz.png");
var run_png_1 = require("../public/run.png");
var map_png_1 = require("../public/map.png");
var policy_png_1 = require("../public/policy.png");
function Home() {
    return (React.createElement("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800" },
        React.createElement("div", { className: 'p-3' },
            React.createElement("h1", { className: "text-4xl font-bold" }, "EIS MSD")),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("div", { className: 'grid grid-cols-2 lg:grid-cols-3' },
            React.createElement("a", { href: "https://health2.bangkok.go.th/", target: "_blank", rel: "noopener noreferrer", className: "px-6 py-2" },
                React.createElement("div", { className: 'grid lg:grid-cols-3 sm:grid-cols-1' },
                    React.createElement("div", { className: 'flex flex-col items-center justify-center pb-4' },
                        React.createElement(image_1["default"], { alt: 'logo1', src: health_png_1["default"], height: 50 })),
                    React.createElement("div", { className: 'sm:sm:col-span-2 p-3 bg-[#92CA68] text-white rounded-4xl hover:bg-blue-300 text-center' }, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E38\u0E02\u0E20\u0E32\u0E1E"))),
            React.createElement("a", { href: "https://www.appsheet.com/start/5a5fea49-fcf1-4247-890a-2b1c1a5c8161", target: "_blank", rel: "noopener noreferrer", className: "px-6 py-2" },
                React.createElement("div", { className: 'grid lg:grid-cols-3 sm:grid-cols-1' },
                    React.createElement("div", { className: 'flex flex-col items-center justify-center' },
                        React.createElement("div", { className: 'flex flex-col items-center justify-center pb-4' },
                            React.createElement(image_1["default"], { alt: 'logo6', src: run_png_1["default"], height: 50 }))),
                    React.createElement("div", { className: 'sm:sm:col-span-2 p-3 bg-[#92CA68] text-white rounded-4xl hover:bg-blue-300 text-center' }, "\u0E27\u0E34\u0E48\u0E07\u0E25\u0E49\u0E2D\u0E21\u0E40\u0E21\u0E37\u0E2D\u0E07"))),
            React.createElement("a", { href: "https://healthmap.bangkok.go.th/", target: "_blank", rel: "noopener noreferrer", className: "px-6 py-2" },
                React.createElement("div", { className: 'grid lg:grid-cols-3 sm:grid-cols-1' },
                    React.createElement("div", { className: 'flex flex-col items-center justify-center' },
                        React.createElement("div", { className: 'flex flex-col items-center justify-center pb-4' },
                            React.createElement(image_1["default"], { alt: 'logo7', src: map_png_1["default"], height: 50 }))),
                    React.createElement("div", { className: 'sm:sm:col-span-2 p-3 bg-[#92CA68] text-white rounded-4xl hover:bg-blue-300 text-center' }, "Bangkok Health Map"))),
            React.createElement("a", { href: "https://policy.bangkok.go.th/tracking/frontend/web/index.php?r=site/index", target: "_blank", rel: "noopener noreferrer", className: "px-6 py-2" },
                React.createElement("div", { className: 'grid lg:grid-cols-3 sm:grid-cols-1' },
                    React.createElement("div", { className: 'flex flex-col items-center justify-center' },
                        React.createElement("div", { className: 'flex flex-col items-center justify-center pb-4' },
                            React.createElement(image_1["default"], { alt: 'logo8', src: policy_png_1["default"], height: 50 }))),
                    React.createElement("div", { className: 'sm:sm:col-span-2 p-3 bg-[#92CA68] text-white rounded-4xl hover:bg-blue-300 text-center' }, "BMA Policy Tracking"))),
            React.createElement("a", { href: "https://lookerstudio.google.com/reporting/729bad69-a870-4b42-ad0f-1e62ed539d0d", target: "_blank", rel: "noopener noreferrer", className: "px-6 py-2" },
                React.createElement("div", { className: 'grid lg:grid-cols-3 sm:grid-cols-1' },
                    React.createElement("div", { className: 'flex flex-col items-center justify-center pl-2 pb-4' },
                        React.createElement(image_1["default"], { alt: 'logo4', src: search_0_png_1["default"], height: 50 })),
                    React.createElement("div", { className: 'sm:sm:col-span-2 p-3 bg-[#92CA68] text-white rounded-4xl hover:bg-blue-300 text-center' }, "\u0E04\u0E27\u0E32\u0E21\u0E1E\u0E36\u0E07\u0E1E\u0E2D\u0E43\u0E08 \u0E19\u0E2D\u0E01/\u0E43\u0E19"))),
            React.createElement("a", { href: "https://app.powerbi.com/Redirect?action=OpenApp&appId=ea27f370-2aa8-450f-85d5-73465ef8e7f4&ctid=dc1b7874-15e2-4d3c-9adf-ea491e366dae&experience=power-bi", target: "_blank", rel: "noopener noreferrer", className: "px-6 py-2" },
                React.createElement("div", { className: 'grid lg:grid-cols-3 sm:grid-cols-1' },
                    React.createElement("div", { className: 'flex flex-col items-center justify-center pb-4' },
                        React.createElement(image_1["default"], { alt: 'logo2', src: data_png_1["default"], height: 50 })),
                    React.createElement("div", { className: 'sm:sm:col-span-2 p-3 bg-[#92CA68] text-white rounded-4xl hover:bg-blue-300 text-center' }, "Data Center"))),
            React.createElement("a", { href: "http://msdmec.go.th/financial/", target: "_blank", rel: "noopener noreferrer", className: "px-6 py-2" },
                React.createElement("div", { className: 'grid lg:grid-cols-3 sm:grid-cols-1' },
                    React.createElement("div", { className: 'flex flex-col items-center justify-center pb-4' },
                        React.createElement(image_1["default"], { alt: 'logo3', src: budget_png_1["default"], height: 50 })),
                    React.createElement("div", { className: 'sm:sm:col-span-2 p-3 bg-[#92CA68] text-white rounded-4xl hover:bg-blue-300 text-center' }, "\u0E07\u0E1A\u0E1B\u0E23\u0E30\u0E21\u0E32\u0E13"))),
            React.createElement("a", { href: "http://msdmec.go.th/bhz/admin.php", target: "_blank", rel: "noopener noreferrer", className: "px-6 py-2 " },
                React.createElement("div", { className: 'grid lg:grid-cols-3 sm:grid-cols-1' },
                    React.createElement("div", { className: 'flex flex-col items-center justify-center pb-4' },
                        React.createElement(image_1["default"], { alt: 'logo5', src: bhz_png_1["default"], height: 50 })),
                    React.createElement("div", { className: 'sm:sm:col-span-2 p-3 bg-[#92CA68] text-white rounded-4xl hover:bg-blue-300 text-center' }, "BHZ")))),
        React.createElement("br", null),
        React.createElement("br", null)));
}
exports["default"] = Home;
