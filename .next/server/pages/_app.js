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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppContextFolder_AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppContextFolder/AppContext */ \"./components/AppContextFolder/AppContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const timerCookie = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const windowSizeTrackerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const mousePositionRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const [sharedState, setSharedState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        portfolio: {\n            NavBar: {\n                IntervalEvent: null,\n                scrolling: null,\n                scrollSizeY: null\n            },\n            Scrolling: {\n                IntervalEvent: null\n            }\n        },\n        userdata: {\n            timerCookieRef: timerCookie,\n            windowSizeTracker: windowSizeTrackerRef,\n            mousePositionTracker: mousePositionRef\n        },\n        typing: {\n            keyboardEvent: null,\n            eventInputLostFocus: null\n        },\n        finishedLoading: false\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppContextFolder_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            sharedState,\n            setSharedState\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"F:\\\\Work-R\\\\anton_portfolio\\\\pages\\\\_app.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\Work-R\\\\anton_portfolio\\\\pages\\\\_app.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0I7QUFDb0M7QUFDMUI7QUFFekMsU0FBU0csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxNQUFNQyxjQUFjTCw2Q0FBTUEsQ0FBQztJQUMzQixNQUFNTSx1QkFBdUJOLDZDQUFNQSxDQUFDO0lBQ3BDLE1BQU1PLG1CQUFtQlAsNkNBQU1BLENBQUM7SUFDaEMsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdSLCtDQUFRQSxDQUFDO1FBQzdDUyxXQUFXO1lBQ1RDLFFBQVE7Z0JBQ05DLGVBQWU7Z0JBQ2ZDLFdBQVc7Z0JBQ1hDLGFBQWE7WUFDZjtZQUNBQyxXQUFVO2dCQUNSSCxlQUFjO1lBQ2hCO1FBQ0Y7UUFDQUksVUFBVTtZQUNSQyxnQkFBZ0JaO1lBQ2hCYSxtQkFBbUJaO1lBQ25CYSxzQkFBc0JaO1FBQ3hCO1FBQ0FhLFFBQVE7WUFDTkMsZUFBZTtZQUNmQyxxQkFBcUI7UUFDdkI7UUFDQUMsaUJBQWlCO0lBQ25CO0lBQ0EscUJBQ0UsOERBQUN4Qix3RkFBbUI7UUFBQzBCLE9BQU87WUFBRWpCO1lBQWFDO1FBQWU7a0JBQ3hELDRFQUFDTjtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJzaXRlLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwQ29udGV4dEZvbGRlci9BcHBDb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IHRpbWVyQ29va2llID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHdpbmRvd1NpemVUcmFja2VyUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IG1vdXNlUG9zaXRpb25SZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW3NoYXJlZFN0YXRlLCBzZXRTaGFyZWRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBwb3J0Zm9saW86IHtcclxuICAgICAgTmF2QmFyOiB7XHJcbiAgICAgICAgSW50ZXJ2YWxFdmVudDogbnVsbCxcclxuICAgICAgICBzY3JvbGxpbmc6IG51bGwsXHJcbiAgICAgICAgc2Nyb2xsU2l6ZVk6IG51bGwsXHJcbiAgICAgIH0sXHJcbiAgICAgIFNjcm9sbGluZzp7XHJcbiAgICAgICAgSW50ZXJ2YWxFdmVudDpudWxsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyZGF0YToge1xyXG4gICAgICB0aW1lckNvb2tpZVJlZjogdGltZXJDb29raWUsXHJcbiAgICAgIHdpbmRvd1NpemVUcmFja2VyOiB3aW5kb3dTaXplVHJhY2tlclJlZixcclxuICAgICAgbW91c2VQb3NpdGlvblRyYWNrZXI6IG1vdXNlUG9zaXRpb25SZWYsXHJcbiAgICB9LFxyXG4gICAgdHlwaW5nOiB7XHJcbiAgICAgIGtleWJvYXJkRXZlbnQ6IG51bGwsXHJcbiAgICAgIGV2ZW50SW5wdXRMb3N0Rm9jdXM6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgZmluaXNoZWRMb2FkaW5nOiBmYWxzZSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc2hhcmVkU3RhdGUsIHNldFNoYXJlZFN0YXRlIH19PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRpbWVyQ29va2llIiwid2luZG93U2l6ZVRyYWNrZXJSZWYiLCJtb3VzZVBvc2l0aW9uUmVmIiwic2hhcmVkU3RhdGUiLCJzZXRTaGFyZWRTdGF0ZSIsInBvcnRmb2xpbyIsIk5hdkJhciIsIkludGVydmFsRXZlbnQiLCJzY3JvbGxpbmciLCJzY3JvbGxTaXplWSIsIlNjcm9sbGluZyIsInVzZXJkYXRhIiwidGltZXJDb29raWVSZWYiLCJ3aW5kb3dTaXplVHJhY2tlciIsIm1vdXNlUG9zaXRpb25UcmFja2VyIiwidHlwaW5nIiwia2V5Ym9hcmRFdmVudCIsImV2ZW50SW5wdXRMb3N0Rm9jdXMiLCJmaW5pc2hlZExvYWRpbmciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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