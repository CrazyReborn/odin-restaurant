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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contacts\": () => (/* binding */ contacts)\n/* harmony export */ });\nfunction contacts() {\n    const contactForms = document.createElement('div');\n    contactForms.textContent = 'Contacts';\n    \n    const phone = document.createElement('p');\n    phone.textContent = 'Phone: 123 456 789';\n\n    const email = document.createElement('p');\n    email.textContent = 'E-mail: asdfghjk@hjkl.com';\n\n    contactForms.appendChild(phone);\n    contactForms.appendChild(email);\n    document.querySelector('#content').appendChild(contactForms);\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _logo_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.jpg */ \"./src/logo.jpg\");\n\n\nfunction homePage() {\n    const div = document.querySelector('#content');\n    const image = document.createElement('img');\n    image.src = _logo_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    const para = document.createElement('p');\n    const head = document.createElement('h1');\n    head.textContent = 'Polska Babcia';\n    para.textContent = 'The Best Polish Food!'\n    div.appendChild(image);\n    div.appendChild(head);\n    div.appendChild(para);\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/home-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ \"./src/home-page.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nfunction navBar() {\n    const naviBar = document.createElement('ul');\n    const home = document.createElement('li');\n    const menu = document.createElement('li');\n    const contact  = document.createElement('li');\n    \n    home.textContent = 'Home';\n    menu.textContent = 'Menu';\n    contact.textContent = 'Contacts';\n\n    naviBar.appendChild(home);\n    naviBar.appendChild(menu);\n    naviBar.appendChild(contact);\n    document.querySelector('#content').appendChild(naviBar);\n\n    home.addEventListener('click', e=> {\n        document.querySelector('#content').innerHTML = '';\n        navBar();\n        (0,_home_page__WEBPACK_IMPORTED_MODULE_0__.homePage)();\n        \n    })\n    \n    menu.addEventListener('click', e=> {\n        document.querySelector('#content').innerHTML = '';\n        navBar();\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuItems)();\n    })\n\n    contact.addEventListener('click', e=> {\n        document.querySelector('#content').innerHTML = '';\n        navBar();\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.contacts)();\n    })\n}\n\nnavBar();\n(0,_home_page__WEBPACK_IMPORTED_MODULE_0__.homePage)();\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu-items.js":
/*!***************************!*\
  !*** ./src/menu-items.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuItemsList\": () => (/* binding */ menuItemsList)\n/* harmony export */ });\n/* harmony import */ var _zurek_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zurek.jpg */ \"./src/zurek.jpg\");\n/* harmony import */ var _pierogi_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pierogi.jpg */ \"./src/pierogi.jpg\");\n/* harmony import */ var _kompot_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kompot.jpg */ \"./src/kompot.jpg\");\n\n\n\n\nclass MenuItem {\n    constructor(name, price, image) {\n        this.name = name;\n        this.price = price;\n        this.image = image;\n    }\n}\n\nconst pierogi = new MenuItem('Pierogi', '3 Euro', _pierogi_jpg__WEBPACK_IMPORTED_MODULE_1__);\nconst zurek = new MenuItem('Zurek', '3 Euro', _zurek_jpg__WEBPACK_IMPORTED_MODULE_0__);\nconst kompot = new MenuItem('Kompot', '2 Euro', _kompot_jpg__WEBPACK_IMPORTED_MODULE_2__);\n\nconst menuItemsList = [pierogi, zurek, kompot];\n\n\n//# sourceURL=webpack://odin-restaurant/./src/menu-items.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuItems\": () => (/* binding */ menuItems)\n/* harmony export */ });\n/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items */ \"./src/menu-items.js\");\n\n\nfunction menuItems() {\n    _menu_items__WEBPACK_IMPORTED_MODULE_0__.menuItemsList.forEach(e => {\n        const element = document.createElement('div');\n        const image = document.createElement('img');\n        element.textContent = `${e.name} costs ${e.price}`;\n        image.src = e.image;\n        document.querySelector('#content').appendChild(image);\n        document.querySelector('#content').appendChild(element);\n    });\n};\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/kompot.jpg":
/*!************************!*\
  !*** ./src/kompot.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f53dcb3cef558b771418.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/kompot.jpg?");

/***/ }),

/***/ "./src/logo.jpg":
/*!**********************!*\
  !*** ./src/logo.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"801e0320ec1bc9ff8f98.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/logo.jpg?");

/***/ }),

/***/ "./src/pierogi.jpg":
/*!*************************!*\
  !*** ./src/pierogi.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8e3de9b1225a8903a9bd.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/pierogi.jpg?");

/***/ }),

/***/ "./src/zurek.jpg":
/*!***********************!*\
  !*** ./src/zurek.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9cb576cc0e81564be2c2.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/zurek.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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