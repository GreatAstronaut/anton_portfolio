/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/AppContextFolder/AppContext.tsx":
/*!****************************************************!*\
  !*** ./components/AppContextFolder/AppContext.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n// Provide a default value matching the type (can be null if you handle nulls)\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcENvbnRleHRGb2xkZXIvQXBwQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3NDO0FBUXRDLDhFQUE4RTtBQUM5RSxNQUFNQywyQkFBYUQsb0RBQWFBLENBQXdCO0FBRXhELGlFQUFlQyxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL2NvbXBvbmVudHMvQXBwQ29udGV4dEZvbGRlci9BcHBDb250ZXh0LnRzeD9lZGMzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBEZWZpbmUgdGhlIHNoYXBlIG9mIHlvdXIgc2hhcmVkIHN0YXRlIGhlcmVcclxuZXhwb3J0IGludGVyZmFjZSBBcHBDb250ZXh0VHlwZSB7XHJcbiAgc2hhcmVkU3RhdGU6IGFueTsgLy8gUmVwbGFjZSAnYW55JyB3aXRoIGEgbW9yZSBzcGVjaWZpYyB0eXBlIGlmIHBvc3NpYmxlXHJcbiAgc2V0U2hhcmVkU3RhdGU6IChzdGF0ZTogYW55KSA9PiB2b2lkOyAvLyBVcGRhdGUgdHlwZSBhcyBuZWVkZWRcclxufVxyXG5cclxuLy8gUHJvdmlkZSBhIGRlZmF1bHQgdmFsdWUgbWF0Y2hpbmcgdGhlIHR5cGUgKGNhbiBiZSBudWxsIGlmIHlvdSBoYW5kbGUgbnVsbHMpXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEFwcENvbnRleHRUeXBlIHwgbnVsbD4obnVsbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsIkFwcENvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AppContextFolder/AppContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppContextFolder_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppContextFolder/AppContext */ \"./components/AppContextFolder/AppContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    // Refs for userdata\n    const timerCookieRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const windowSizeTrackerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const mousePositionRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    // Memoize initial state to avoid recreation on each render\n    const initialState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({\n            portfolio: {\n                NavBar: {\n                    IntervalEvent: null,\n                    scrolling: null,\n                    scrollSizeY: null\n                },\n                Scrolling: {\n                    IntervalEvent: null\n                }\n            },\n            userdata: {\n                timerCookieRef,\n                windowSizeTracker: windowSizeTrackerRef,\n                mousePositionTracker: mousePositionRef\n            },\n            typing: {\n                keyboardEvent: null,\n                eventInputLostFocus: null\n            },\n            finishedLoading: false\n        }), [\n        timerCookieRef,\n        windowSizeTrackerRef,\n        mousePositionRef\n    ]);\n    const [sharedState, setSharedState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppContextFolder_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            sharedState,\n            setSharedState\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"F:\\\\Work-R\\\\anton_portfolio\\\\pages\\\\_app.tsx\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\Work-R\\\\anton_portfolio\\\\pages\\\\_app.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDK0I7QUFDb0M7QUFDTjtBQWdDN0QsU0FBU0ksTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyxvQkFBb0I7SUFDcEIsTUFBTUMsaUJBQWlCTiw2Q0FBTUEsQ0FBZ0I7SUFDN0MsTUFBTU8sdUJBQXVCUCw2Q0FBTUEsQ0FBMkM7SUFDOUUsTUFBTVEsbUJBQW1CUiw2Q0FBTUEsQ0FBa0M7SUFFakUsMkRBQTJEO0lBQzNELE1BQU1TLGVBQWVQLDhDQUFPQSxDQUFjLElBQU87WUFDL0NRLFdBQVc7Z0JBQ1RDLFFBQVE7b0JBQ05DLGVBQWU7b0JBQ2ZDLFdBQVc7b0JBQ1hDLGFBQWE7Z0JBQ2Y7Z0JBQ0FDLFdBQVc7b0JBQ1RILGVBQWU7Z0JBQ2pCO1lBQ0Y7WUFDQUksVUFBVTtnQkFDUlY7Z0JBQ0FXLG1CQUFtQlY7Z0JBQ25CVyxzQkFBc0JWO1lBQ3hCO1lBQ0FXLFFBQVE7Z0JBQ05DLGVBQWU7Z0JBQ2ZDLHFCQUFxQjtZQUN2QjtZQUNBQyxpQkFBaUI7UUFDbkIsSUFBSTtRQUFDaEI7UUFBZ0JDO1FBQXNCQztLQUFpQjtJQUU1RCxNQUFNLENBQUNlLGFBQWFDLGVBQWUsR0FBR3ZCLCtDQUFRQSxDQUFjUTtJQUU1RCxxQkFDRSw4REFBQ1Ysd0ZBQW1CO1FBQUMyQixPQUFPO1lBQUVIO1lBQWFDO1FBQWU7a0JBQ3hELDRFQUFDcEI7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2Vic2l0ZS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBDb250ZXh0Rm9sZGVyL0FwcENvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlTWVtbywgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuXHJcbi8vIFR5cGVzIGZvciBzaGFyZWQgc3RhdGVcclxuZXhwb3J0IHR5cGUgU2hhcmVkU3RhdGUgPSB7XHJcbiAgcG9ydGZvbGlvOiB7XHJcbiAgICBOYXZCYXI6IHtcclxuICAgICAgSW50ZXJ2YWxFdmVudDogbnVtYmVyIHwgbnVsbDtcclxuICAgICAgc2Nyb2xsaW5nOiBib29sZWFuIHwgbnVsbDtcclxuICAgICAgc2Nyb2xsU2l6ZVk6IG51bWJlciB8IG51bGw7XHJcbiAgICB9O1xyXG4gICAgU2Nyb2xsaW5nOiB7XHJcbiAgICAgIEludGVydmFsRXZlbnQ6IG51bWJlciB8IG51bGw7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgdXNlcmRhdGE6IHtcclxuICAgIHRpbWVyQ29va2llUmVmOiBSZWFjdC5NdXRhYmxlUmVmT2JqZWN0PG51bWJlciB8IG51bGw+O1xyXG4gICAgd2luZG93U2l6ZVRyYWNrZXI6IFJlYWN0Lk11dGFibGVSZWZPYmplY3Q8eyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHwgbnVsbD47XHJcbiAgICBtb3VzZVBvc2l0aW9uVHJhY2tlcjogUmVhY3QuTXV0YWJsZVJlZk9iamVjdDx7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsPjtcclxuICB9O1xyXG4gIHR5cGluZzoge1xyXG4gICAga2V5Ym9hcmRFdmVudDogS2V5Ym9hcmRFdmVudCB8IG51bGw7XHJcbiAgICBldmVudElucHV0TG9zdEZvY3VzOiBGb2N1c0V2ZW50IHwgbnVsbDtcclxuICB9O1xyXG4gIGZpbmlzaGVkTG9hZGluZzogYm9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIEFwcENvbnRleHRWYWx1ZSA9IHtcclxuICBzaGFyZWRTdGF0ZTogU2hhcmVkU3RhdGU7XHJcbiAgc2V0U2hhcmVkU3RhdGU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPFNoYXJlZFN0YXRlPj47XHJcbn07XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgLy8gUmVmcyBmb3IgdXNlcmRhdGFcclxuICBjb25zdCB0aW1lckNvb2tpZVJlZiA9IHVzZVJlZjxudW1iZXIgfCBudWxsPihudWxsKTtcclxuICBjb25zdCB3aW5kb3dTaXplVHJhY2tlclJlZiA9IHVzZVJlZjx7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gfCBudWxsPihudWxsKTtcclxuICBjb25zdCBtb3VzZVBvc2l0aW9uUmVmID0gdXNlUmVmPHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGw+KG51bGwpO1xyXG5cclxuICAvLyBNZW1vaXplIGluaXRpYWwgc3RhdGUgdG8gYXZvaWQgcmVjcmVhdGlvbiBvbiBlYWNoIHJlbmRlclxyXG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHVzZU1lbW88U2hhcmVkU3RhdGU+KCgpID0+ICh7XHJcbiAgICBwb3J0Zm9saW86IHtcclxuICAgICAgTmF2QmFyOiB7XHJcbiAgICAgICAgSW50ZXJ2YWxFdmVudDogbnVsbCxcclxuICAgICAgICBzY3JvbGxpbmc6IG51bGwsXHJcbiAgICAgICAgc2Nyb2xsU2l6ZVk6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIFNjcm9sbGluZzoge1xyXG4gICAgICAgIEludGVydmFsRXZlbnQ6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgdXNlcmRhdGE6IHtcclxuICAgICAgdGltZXJDb29raWVSZWYsXHJcbiAgICAgIHdpbmRvd1NpemVUcmFja2VyOiB3aW5kb3dTaXplVHJhY2tlclJlZixcclxuICAgICAgbW91c2VQb3NpdGlvblRyYWNrZXI6IG1vdXNlUG9zaXRpb25SZWYsXHJcbiAgICB9LFxyXG4gICAgdHlwaW5nOiB7XHJcbiAgICAgIGtleWJvYXJkRXZlbnQ6IG51bGwsXHJcbiAgICAgIGV2ZW50SW5wdXRMb3N0Rm9jdXM6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgZmluaXNoZWRMb2FkaW5nOiBmYWxzZSxcclxuICB9KSwgW3RpbWVyQ29va2llUmVmLCB3aW5kb3dTaXplVHJhY2tlclJlZiwgbW91c2VQb3NpdGlvblJlZl0pO1xyXG5cclxuICBjb25zdCBbc2hhcmVkU3RhdGUsIHNldFNoYXJlZFN0YXRlXSA9IHVzZVN0YXRlPFNoYXJlZFN0YXRlPihpbml0aWFsU3RhdGUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc2hhcmVkU3RhdGUsIHNldFNoYXJlZFN0YXRlIH19PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aW1lckNvb2tpZVJlZiIsIndpbmRvd1NpemVUcmFja2VyUmVmIiwibW91c2VQb3NpdGlvblJlZiIsImluaXRpYWxTdGF0ZSIsInBvcnRmb2xpbyIsIk5hdkJhciIsIkludGVydmFsRXZlbnQiLCJzY3JvbGxpbmciLCJzY3JvbGxTaXplWSIsIlNjcm9sbGluZyIsInVzZXJkYXRhIiwid2luZG93U2l6ZVRyYWNrZXIiLCJtb3VzZVBvc2l0aW9uVHJhY2tlciIsInR5cGluZyIsImtleWJvYXJkRXZlbnQiLCJldmVudElucHV0TG9zdEZvY3VzIiwiZmluaXNoZWRMb2FkaW5nIiwic2hhcmVkU3RhdGUiLCJzZXRTaGFyZWRTdGF0ZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();