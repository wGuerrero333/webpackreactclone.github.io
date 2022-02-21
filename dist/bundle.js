/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/division.js":
/*!*************************!*\
  !*** ./src/division.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction division(number1, number2){\r\n    return parseInt(number1) / parseInt(number2);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (division);\n\n//# sourceURL=webpack://cloneegsencillowebpack/./src/division.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sum */ \"./src/sum.js\");\n/* harmony import */ var _substraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./substraction */ \"./src/substraction.js\");\n/* harmony import */ var _multiplication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiplication */ \"./src/multiplication.js\");\n/* harmony import */ var _division__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./division */ \"./src/division.js\");\nconst btn = document.querySelector('#btn');\r\nconst n1 = document.querySelector('#n1');\r\nconst n2 = document.querySelector('#n2');\r\nconst op = document.querySelector('#op');\r\nconst res = document.querySelector('#res');\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nbtn.addEventListener('click', e =>{\r\n    switch(op.value){\r\n        case '+':\r\n            res.textContent = (0,_sum__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(n1.value, n2.value);\r\n        break;\r\n        case '-':\r\n            res.textContent = (0,_substraction__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(n1.value, n2.value);\r\n        break;\r\n        case '*':\r\n            res.textContent = (0,_multiplication__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(n1.value, n2.value);\r\n        break;\r\n        case '/':\r\n            res.textContent = (0,_division__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(n1.value, n2.value);\r\n        break;\r\n    }\r\n});\n\n//# sourceURL=webpack://cloneegsencillowebpack/./src/index.js?");

/***/ }),

/***/ "./src/multiplication.js":
/*!*******************************!*\
  !*** ./src/multiplication.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction multiplication(number1, number2){\r\n    return parseInt(number1) * parseInt(number2);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (multiplication);\r\n\n\n//# sourceURL=webpack://cloneegsencillowebpack/./src/multiplication.js?");

/***/ }),

/***/ "./src/substraction.js":
/*!*****************************!*\
  !*** ./src/substraction.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction substraction(number1, number2){\r\n    return parseInt(number1) - parseInt(number2);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (substraction);\r\n\n\n//# sourceURL=webpack://cloneegsencillowebpack/./src/substraction.js?");

/***/ }),

/***/ "./src/sum.js":
/*!********************!*\
  !*** ./src/sum.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction sum(number1, number2){\r\n    return parseInt(number1) + parseInt(number2);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sum);\r\n\n\n//# sourceURL=webpack://cloneegsencillowebpack/./src/sum.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;