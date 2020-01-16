(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["WidgetTestLogo"] = factory(require("prop-types"), require("react"));
	else
		root["WidgetTestLogo"] = factory(root["PropTypes"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/draw.js":
/*!*********************!*\
  !*** ./src/draw.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction draw(ctx, theme) {\n  ctx.fillStyle = theme === 'orange' ? '#ff6a00' : 'rgb(52, 55, 62)';\n  roundedRect(ctx, 100, 100, 200, 120, 30);\n  ctx.fillStyle = 'white';\n  roundedRect(ctx, 125, 135, 150, 50, 10);\n  ctx.beginPath();\n  ctx.moveTo(200, 100);\n  ctx.lineTo(180, 100);\n  ctx.lineTo(175, 125);\n  ctx.lineTo(133, 135);\n  ctx.lineTo(200, 135);\n  ctx.closePath();\n  ctx.fill();\n  ctx.beginPath();\n  ctx.moveTo(200, 100);\n  ctx.lineTo(220, 100);\n  ctx.lineTo(225, 125);\n  ctx.lineTo(267, 135);\n  ctx.lineTo(200, 135);\n  ctx.closePath();\n  ctx.fill();\n  ctx.beginPath();\n  ctx.moveTo(200, 220);\n  ctx.lineTo(180, 220);\n  ctx.lineTo(175, 195);\n  ctx.lineTo(133, 185);\n  ctx.lineTo(200, 185);\n  ctx.closePath();\n  ctx.fill();\n  ctx.beginPath();\n  ctx.moveTo(200, 220);\n  ctx.lineTo(220, 220);\n  ctx.lineTo(225, 195);\n  ctx.lineTo(267, 185);\n  ctx.lineTo(200, 185);\n  ctx.closePath();\n  ctx.fill();\n  ctx.fillStyle = theme === 'orange' ? '#ff6a00' : 'rgb(52, 55, 62)';\n  roundedRect(ctx, 175, 160, 50, 5, 0);\n}\n\nfunction roundedRect(ctx, x, y, width, height, radius) {\n  var fill = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;\n  ctx.beginPath();\n  ctx.moveTo(x, y + radius);\n  ctx.lineTo(x, y + height - radius);\n  ctx.arcTo(x, y + height, x + radius, y + height, radius);\n  ctx.lineTo(x + width - radius, y + height);\n  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);\n  ctx.lineTo(x + width, y + radius);\n  ctx.arcTo(x + width, y, x + width - radius, y, radius);\n  ctx.lineTo(x + radius, y);\n  ctx.arcTo(x, y, x, y + radius, radius);\n  fill ? ctx.fill() : ctx.stroke();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (draw);\n\n//# sourceURL=webpack://WidgetTestLogo/./src/draw.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draw */ \"./src/draw.js\");\n\n\n\n\nfunction Logo(_ref) {\n  var _ref$theme = _ref.theme,\n      theme = _ref$theme === void 0 ? 'orange' : _ref$theme;\n  var canvas = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var context = canvas.current && canvas.getContext('2d');\n    Object(_draw__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(context, theme);\n  }, [theme]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"canvas\", {\n    ref: canvas,\n    width: \"300\",\n    height: \"300\"\n  });\n}\n\nLogo.propTypes = {\n  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Logo);\n\n//# sourceURL=webpack://WidgetTestLogo/./src/index.js?");

/***/ }),

/***/ "prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"root":"PropTypes","commonjs2":"prop-types","commonjs":"prop-types","amd":"prop-types"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;\n\n//# sourceURL=webpack://WidgetTestLogo/external_%7B%22root%22:%22PropTypes%22,%22commonjs2%22:%22prop-types%22,%22commonjs%22:%22prop-types%22,%22amd%22:%22prop-types%22%7D?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://WidgetTestLogo/external_%7B%22root%22:%22React%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22,%22amd%22:%22react%22%7D?");

/***/ })

/******/ });
});
