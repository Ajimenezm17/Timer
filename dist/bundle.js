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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ \"./src/timer.js\");\n\n\ndocument.getElementById('up-btn').addEventListener('click', _timer__WEBPACK_IMPORTED_MODULE_1__.increaseTime);\ndocument.getElementById('down-btn').addEventListener('click', _timer__WEBPACK_IMPORTED_MODULE_1__.decreaseTime);\ndocument.getElementById('start-btn').addEventListener('click', _timer__WEBPACK_IMPORTED_MODULE_1__.startTimer);\ndocument.getElementById('reset-btn').addEventListener('click', _timer__WEBPACK_IMPORTED_MODULE_1__.resetTimer);\n(0,_timer__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)();\n\n//# sourceURL=webpack://timer-app/./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://timer-app/./src/style.scss?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decreaseTime: () => (/* binding */ decreaseTime),\n/* harmony export */   increaseTime: () => (/* binding */ increaseTime),\n/* harmony export */   resetTimer: () => (/* binding */ resetTimer),\n/* harmony export */   startTimer: () => (/* binding */ startTimer),\n/* harmony export */   updateDisplay: () => (/* binding */ updateDisplay)\n/* harmony export */ });\nvar minutes = 0;\nvar seconds = 0;\nvar interval = null;\nvar lastSetMinutes = 0;\nvar lastSetSeconds = 0;\nfunction updateDisplay() {\n  document.getElementById(\"timer-display\").innerText = \"\".concat(String(minutes).padStart(2, '0'), \":\").concat(String(seconds).padStart(2, '0'));\n}\nfunction increaseTime() {\n  // Sumar un minuto en el Timer\n  if (minutes < 59) {\n    minutes++;\n  }\n  lastSetMinutes = minutes;\n  lastSetSeconds = seconds;\n  updateDisplay();\n}\nfunction decreaseTime() {\n  // Restar un minuto al timer, pero no dejar que sea negativo\n  if (minutes > 0) {\n    minutes--;\n  } else if (seconds > 0) {\n    //Para cuando tengamos 0 minutos pero si tengamos segundos\n    seconds--;\n  }\n  lastSetMinutes = minutes;\n  lastSetSeconds = seconds;\n  updateDisplay();\n}\nfunction startTimer() {\n  if (interval) return;\n  interval = setInterval(function () {\n    if (seconds > 0) {\n      seconds--;\n    } else if (minutes > 0) {\n      minutes--;\n      seconds = 59;\n    } else {\n      clearInterval(interval);\n      interval = null;\n    }\n    updateDisplay();\n  }, 1000);\n}\nfunction resetTimer() {\n  clearInterval(interval);\n  interval = null;\n  minutes = lastSetMinutes;\n  seconds = lastSetSeconds;\n  updateDisplay();\n}\n\n//# sourceURL=webpack://timer-app/./src/timer.js?");

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