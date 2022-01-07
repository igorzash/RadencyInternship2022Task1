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

/***/ "./src/category.js":
/*!*************************!*\
  !*** ./src/category.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst CATEGORY = {\n\tTASK: \"Task\",\n\tRTHOUGHT: \"Random Thought\",\n\tIDEA: \"Idea\",\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CATEGORY);\n\n\n//# sourceURL=webpack://task1/./src/category.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note */ \"./src/note.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category */ \"./src/category.js\");\n\n\n\n\n\nconst notesRoot = document.getElementById(\"notes__root\");\nconst archivedNotesRoot = document.getElementById(\"archieved-notes__root\");\nconst notesTypeSelect = document.getElementById(\"notes-type__select\");\nconst newNoteButton = document.getElementById('new-note__btn');\n\nnewNoteButton.addEventListener(\"click\", () => {\n\tconst note = new _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"\", _category__WEBPACK_IMPORTED_MODULE_3__[\"default\"].TASK, new Date());\n\t_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addNote(note);\n\t(0,_view__WEBPACK_IMPORTED_MODULE_0__.renderNote)(note, { editState: true });\n});\n\nnotesTypeSelect.addEventListener(\"change\", (event) => {\n\tconst index = event.target.selectedIndex;\n\n\tif (index === 0) {\n\t\tnotesRoot.classList.remove(\"hidden\");\n\t\tarchivedNotesRoot.classList.add(\"hidden\");\n\t\tnewNoteButton.classList.remove(\"hidden\");\n\t} else if (index === 1) {\n\t\tnotesRoot.classList.add(\"hidden\");\n\t\tarchivedNotesRoot.classList.remove(\"hidden\");\n\t\tnewNoteButton.classList.add(\"hidden\");\n\t}\n});\n\n(0,_view__WEBPACK_IMPORTED_MODULE_0__.init)();\n\n\n//# sourceURL=webpack://task1/./src/index.js?");

/***/ }),

/***/ "./src/note.js":
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Note)\n/* harmony export */ });\nclass Note {\n\tarchived = false;\n\n\tconstructor(contents, category, date) {\n\t\tthis.contents = contents;\n\t\tthis.category = category;\n\t\tthis.date = date;\n\t}\n\n\tupdate(contents, category) {\n\t\tthis.contents = contents;\n\t\tthis.category = category;\n\t}\n\n\ttoggleArchive() {\n\t\tthis.archived = !this.archived;\n\t}\n}\n\n\n//# sourceURL=webpack://task1/./src/note.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ \"./src/category.js\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note */ \"./src/note.js\");\n\n\n\nclass Storage {\n\tdata = {\n\t\tnotes: new Set(),\n\t};\n\n\taddNote(note) {\n\t\tthis.data.notes.add(note);\n\t}\n\n\tremove(note) {\n\t\tthis.data.notes.delete(note);\n\t}\n}\n\nconst storage = new Storage();\n\n// prepopulate storage\nstorage.addNote(new _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"buy milk\", _category__WEBPACK_IMPORTED_MODULE_0__[\"default\"].TASK, new Date()));\nstorage.addNote(new _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"ok boomer\", _category__WEBPACK_IMPORTED_MODULE_0__[\"default\"].RTHOUGHT, new Date()));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);\n\n\n//# sourceURL=webpack://task1/./src/storage.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNote\": () => (/* binding */ renderNote),\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ \"./src/category.js\");\n\n\n\nconst notesRoot = document.getElementById(\"notes__root\");\nconst archivedNotesRoot = document.getElementById(\"archieved-notes__root\");\n\nfunction renderNote(note, options) {\n\tconst note_container = document.createElement(\"div\");\n\tnote_container.classList.add(\"note-container\");\n\n\t[\n\t\tnote.contents,\n\t\tnote.date.toLocaleDateString(\"en-US\"),\n\t\tnote.category,\n\t].forEach((x, i) => {\n\t\tlet column;\n\n\t\tif (i === 1 || options.editState === false) {\n\t\t\tcolumn = document.createElement(\"div\");\n\t\t\tcolumn.textContent = x;\n\t\t} else if (i === 0) {\n\t\t\tcolumn = document.createElement(\"input\");\n\t\t\tcolumn.classList.add(\"note-contents__input\");\n\t\t\tcolumn.placeholder = \"Type your note contents here.\"\n\t\t\tcolumn.value = x;\n\t\t} else if (i === 2) {\n\t\t\tcolumn = document.createElement(\"select\");\n\t\t\tcolumn.classList.add(\"note-category__select\");\n\n\t\t\tObject.values(_category__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).forEach((x) => {\n\t\t\t\tconst option = document.createElement(\"option\");\n\t\t\t\toption.innerText = x;\n\t\t\t\tcolumn.appendChild(option);\n\t\t\t});\n\n\t\t\tcolumn.value = x;\n\t\t}\n\n\t\tnote_container.appendChild(column);\n\t});\n\n\tconst actions = [\n\t\t{\n\t\t\tname: options.editState === true ? \"save\" : \"edit\",\n\t\t\thandler: ({ target }) => {\n\t\t\t\tif (options.editState) {\n\t\t\t\t\tconst contents = target.querySelector(\n\t\t\t\t\t\t\".note-contents__input\"\n\t\t\t\t\t).value;\n\t\t\t\t\tconst category = target.querySelector(\n\t\t\t\t\t\t\".note-category__select\"\n\t\t\t\t\t).value;\n\n\t\t\t\t\tnote.update(contents, category);\n\t\t\t\t}\n\n\t\t\t\trenderNote(note, {\n\t\t\t\t\t...options,\n\t\t\t\t\teditState: !options.editState,\n\t\t\t\t\ttarget,\n\t\t\t\t});\n\t\t\t},\n\t\t},\n\t\t...(options.editState === false\n\t\t\t? [\n\t\t\t\t\t{\n\t\t\t\t\t\tname: \"archive\",\n\t\t\t\t\t\thandler: ({ target }) => {\n\t\t\t\t\t\t\tnote.toggleArchive();\n\t\t\t\t\t\t\ttarget.remove();\n\t\t\t\t\t\t\tdelete options.target;\n\t\t\t\t\t\t\trenderNote(note, options);\n\t\t\t\t\t\t},\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tname: \"delete\",\n\t\t\t\t\t\thandler: ({ target }) => {\n\t\t\t\t\t\t\t_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].remove(note);\n\t\t\t\t\t\t\ttarget.remove();\n\t\t\t\t\t\t},\n\t\t\t\t\t},\n\t\t\t  ]\n\t\t\t: [\n\t\t\t\t\t{\n\t\t\t\t\t\tname: \"cancel\",\n\t\t\t\t\t\thandler: ({ target }) => {\n\t\t\t\t\t\t\trenderNote(note, {\n\t\t\t\t\t\t\t\toptions,\n\t\t\t\t\t\t\t\teditState: false,\n\t\t\t\t\t\t\t\ttarget,\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t},\n\t\t\t\t\t},\n\t\t\t  ]),\n\t]\n\t\t.filter((x) => x !== undefined)\n\t\t.map((x) => ({\n\t\t\t...x,\n\t\t\thandler: (evt) => {\n\t\t\t\treturn x.handler({\n\t\t\t\t\t...evt,\n\t\t\t\t\ttarget: evt.target.parentElement.parentElement,\n\t\t\t\t});\n\t\t\t},\n\t\t}));\n\n\tconst actions_root = document.createElement(\"div\");\n\n\tfor (const action of actions) {\n\t\tconst btn = document.createElement(\"button\");\n\n\t\tconst icon = document.createElement(\"i\");\n\t\ticon.classList.add(\"material-icons\");\n\t\ticon.textContent = action.name;\n\t\tbtn.appendChild(icon);\n\n\t\tbtn.addEventListener(\"click\", action.handler);\n\n\t\tactions_root.appendChild(btn);\n\t}\n\n\tnote_container.appendChild(actions_root);\n\n\tif (options.target !== undefined) {\n\t\toptions.target.replaceWith(note_container);\n\t\treturn;\n\t}\n\n\t(note.archived === true ? archivedNotesRoot : notesRoot).appendChild(\n\t\tnote_container\n\t);\n}\n\nfunction init() {\n\t_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].data.notes.forEach((note) =>\n\t\trenderNote(note, { editState: false })\n\t);\n}\n\n\n//# sourceURL=webpack://task1/./src/view.js?");

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