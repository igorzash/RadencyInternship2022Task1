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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view/index.js\");\n/* harmony import */ var _view_renderNote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/renderNote */ \"./src/view/renderNote.js\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note */ \"./src/note.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category */ \"./src/category.js\");\n/* harmony import */ var _randomData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./randomData */ \"./src/randomData.js\");\n/* harmony import */ var _view_renderSummaryTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/renderSummaryTable */ \"./src/view/renderSummaryTable.js\");\n\n\n\n\n\n\n\n\nconst notesRoot = document.getElementById(\"notes__root\");\nconst archivedNotesRoot = document.getElementById(\"archieved-notes__root\");\nconst notesTypeSelect = document.getElementById(\"notes-type__select\");\nconst newNoteButton = document.getElementById(\"new-note__btn\");\n\n(0,_randomData__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\nnewNoteButton.addEventListener(\"click\", () => {\n\tconst note = new _note__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"\", _category__WEBPACK_IMPORTED_MODULE_4__[\"default\"].TASK, new Date());\n\t_storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addNote(note);\n\t(0,_view_renderNote__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(note, { editState: true });\n\t(0,_view_renderSummaryTable__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n});\n\nnotesTypeSelect.addEventListener(\"change\", (event) => {\n\tconst index = event.target.selectedIndex;\n\n\tif (index === 0) {\n\t\tnotesRoot.classList.remove(\"hidden\");\n\t\tarchivedNotesRoot.classList.add(\"hidden\");\n\t\tnewNoteButton.classList.remove(\"hidden\");\n\t} else if (index === 1) {\n\t\tnotesRoot.classList.add(\"hidden\");\n\t\tarchivedNotesRoot.classList.remove(\"hidden\");\n\t\tnewNoteButton.classList.add(\"hidden\");\n\t}\n});\n\n(0,_view__WEBPACK_IMPORTED_MODULE_0__.init)();\n\n\n//# sourceURL=webpack://task1/./src/index.js?");

/***/ }),

/***/ "./src/note.js":
/*!*********************!*\
  !*** ./src/note.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Note)\n/* harmony export */ });\nclass Note {\n\tarchived = false;\n\n\tconstructor(contents, category, date) {\n\t\tthis.contents = contents;\n\t\tthis.category = category;\n\t\tthis.date = date;\n\t\tthis.dates = [];\n\n\t\tthis._parse_dates();\n\t}\n\n\t_parse_dates() {\n\t\tthis.dates = this.contents.match(/\\d{1,2}\\/\\d{1,2}\\/\\d{4}/g);\n\n\t\tif (this.dates) this.dates = this.dates.join(\", \");\n\t}\n\n\tupdate(contents, category) {\n\t\tthis.contents = contents;\n\t\tthis.category = category;\n\n\t\tthis._parse_dates();\n\t}\n\n\ttoggleArchive() {\n\t\tthis.archived = !this.archived;\n\t}\n}\n\n\n//# sourceURL=webpack://task1/./src/note.js?");

/***/ }),

/***/ "./src/randomData.js":
/*!***************************!*\
  !*** ./src/randomData.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note */ \"./src/note.js\");\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ \"./src/category.js\");\n\n\n\n\nfunction getRandomInt(min, max) {\n\tmin = Math.ceil(min);\n\tmax = Math.floor(max);\n\treturn Math.floor(Math.random() * (max - min) + min);\n}\n\nconst DAY = 24 * 60 * 60 * 1000;\n\nfunction randomDate() {\n\tconst date = new Date();\n\tdate.setTime(date.getTime() - getRandomInt(5, 10) * DAY);\n\treturn date;\n}\n\nfunction prepopulateStorage() {\n\t_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addNote(new _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"buy milk\", _category__WEBPACK_IMPORTED_MODULE_2__[\"default\"].TASK, randomDate()));\n\t_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addNote(new _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"buy gift\", _category__WEBPACK_IMPORTED_MODULE_2__[\"default\"].TASK, randomDate()));\n\t_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addNote(\n\t\tnew _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"what if earth is flat\", _category__WEBPACK_IMPORTED_MODULE_2__[\"default\"].RTHOUGHT, randomDate())\n\t);\n\t_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addNote(\n\t\tnew _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"meeting with coworker 5/5/2022\", _category__WEBPACK_IMPORTED_MODULE_2__[\"default\"].TASK, randomDate())\n\t);\n\t_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addNote(\n\t\tnew _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"meeting with coworker 5/7/2022\", _category__WEBPACK_IMPORTED_MODULE_2__[\"default\"].TASK, randomDate())\n\t);\n\t_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addNote(\n\t\tnew _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"resolve issue #4939 using X\", _category__WEBPACK_IMPORTED_MODULE_2__[\"default\"].IDEA, randomDate())\n\t);\n\t_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addNote(\n\t\tnew _note__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"read 10 books 3/5/2022-4/6/2022\", _category__WEBPACK_IMPORTED_MODULE_2__[\"default\"].TASK, randomDate())\n\t);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prepopulateStorage);\n\n\n//# sourceURL=webpack://task1/./src/randomData.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ \"./src/category.js\");\n/* harmony import */ var _note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./note */ \"./src/note.js\");\n\n\n\nclass Storage {\n\tdata = {\n\t\tnotes: new Set(),\n\t};\n\n\taddNote(note) {\n\t\tthis.data.notes.add(note);\n\t}\n\n\tremove(note) {\n\t\tthis.data.notes.delete(note);\n\t}\n}\n\nconst storage = new Storage();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);\n\n\n//# sourceURL=webpack://task1/./src/storage.js?");

/***/ }),

/***/ "./src/summaryTable.js":
/*!*****************************!*\
  !*** ./src/summaryTable.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ \"./src/category.js\");\n\n\nfunction summaryTableCalc(notes) {\n\tconst categories = Object.values(_category__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\treturn categories\n\t\t.map((cat) => Array.from(notes).filter((n) => n.category === cat))\n\t\t.map((n, i) => [\n\t\t\tcategories[i],\n\t\t\tn.filter((n) => !n.archived).length,\n\t\t\tn.filter((n) => n.archived).length,\n\t\t]);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (summaryTableCalc);\n\n\n//# sourceURL=webpack://task1/./src/summaryTable.js?");

/***/ }),

/***/ "./src/view/index.js":
/*!***************************!*\
  !*** ./src/view/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ \"./src/storage.js\");\n/* harmony import */ var _renderNote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderNote */ \"./src/view/renderNote.js\");\n/* harmony import */ var _renderSummaryTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderSummaryTable */ \"./src/view/renderSummaryTable.js\");\n\n\n\n\nfunction init() {\n\t_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].data.notes.forEach((note) =>\n\t\t(0,_renderNote__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(note, { editState: false })\n\t);\n\n\t(0,_renderSummaryTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://task1/./src/view/index.js?");

/***/ }),

/***/ "./src/view/renderNote.js":
/*!********************************!*\
  !*** ./src/view/renderNote.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderNoteActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderNoteActions */ \"./src/view/renderNoteActions.js\");\n/* harmony import */ var _renderNoteDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderNoteDetails */ \"./src/view/renderNoteDetails.js\");\n\n\n\nconst notesRoot = document.getElementById(\"notes__root\");\nconst archivedNotesRoot = document.getElementById(\"archieved-notes__root\");\n\nfunction renderNote(note, options) {\n\tconst note_container = document.createElement(\"div\");\n\n\t(0,_renderNoteDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(note, note_container, options);\n\t(0,_renderNoteActions__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(note, note_container, options);\n\n\tif (options.target !== undefined) {\n\t\toptions.target.replaceWith(note_container);\n\t\treturn;\n\t}\n\n\t(note.archived === true ? archivedNotesRoot : notesRoot).appendChild(\n\t\tnote_container\n\t);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderNote);\n\n\n//# sourceURL=webpack://task1/./src/view/renderNote.js?");

/***/ }),

/***/ "./src/view/renderNoteActions.js":
/*!***************************************!*\
  !*** ./src/view/renderNoteActions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderNote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderNote */ \"./src/view/renderNote.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage */ \"./src/storage.js\");\n/* harmony import */ var _renderSummaryTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderSummaryTable */ \"./src/view/renderSummaryTable.js\");\n\n\n\n\nfunction renderNoteActions(note, note_container, options) {\n\tconst actions = [\n\t\t...(note.archived === false\n\t\t\t? [\n\t\t\t\t\t{\n\t\t\t\t\t\tname: options.editState === true ? \"save\" : \"edit\",\n\t\t\t\t\t\thandler: ({ target }) => {\n\t\t\t\t\t\t\tif (options.editState) {\n\t\t\t\t\t\t\t\tconst contents = target.querySelector(\n\t\t\t\t\t\t\t\t\t\".note-contents__input\"\n\t\t\t\t\t\t\t\t).value;\n\t\t\t\t\t\t\t\tconst category = target.querySelector(\n\t\t\t\t\t\t\t\t\t\".note-category__select\"\n\t\t\t\t\t\t\t\t).value;\n\n\t\t\t\t\t\t\t\tnote.update(contents, category);\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t(0,_renderNote__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(note, {\n\t\t\t\t\t\t\t\t...options,\n\t\t\t\t\t\t\t\teditState: !options.editState,\n\t\t\t\t\t\t\t\ttarget,\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t},\n\t\t\t\t\t},\n\t\t\t  ]\n\t\t\t: []),\n\t\t...(options.editState === false\n\t\t\t? [\n\t\t\t\t\t{\n\t\t\t\t\t\tname: \"archive\",\n\t\t\t\t\t\thandler: ({ target }) => {\n\t\t\t\t\t\t\tnote.toggleArchive();\n\t\t\t\t\t\t\ttarget.remove();\n\t\t\t\t\t\t\tdelete options.target;\n\t\t\t\t\t\t\t(0,_renderNote__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(note, options);\n\t\t\t\t\t\t},\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\tname: \"delete\",\n\t\t\t\t\t\thandler: ({ target }) => {\n\t\t\t\t\t\t\t_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove(note);\n\t\t\t\t\t\t\ttarget.remove();\n\t\t\t\t\t\t},\n\t\t\t\t\t},\n\t\t\t  ]\n\t\t\t: [\n\t\t\t\t\t{\n\t\t\t\t\t\tname: \"cancel\",\n\t\t\t\t\t\thandler: ({ target }) => {\n\t\t\t\t\t\t\t(0,_renderNote__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(note, {\n\t\t\t\t\t\t\t\toptions,\n\t\t\t\t\t\t\t\teditState: false,\n\t\t\t\t\t\t\t\ttarget,\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t},\n\t\t\t\t\t},\n\t\t\t  ]),\n\t].map((x) => ({\n\t\t...x,\n\t\thandler: (evt) => {\n\t\t\tx.handler({\n\t\t\t\t...evt,\n\t\t\t\ttarget: evt.target.parentElement.parentElement,\n\t\t\t});\n\n\t\t\t(0,_renderSummaryTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\t\t},\n\t}));\n\n\tconst actions_root = document.createElement(\"div\");\n\n\tfor (const action of actions) {\n\t\tconst btn = document.createElement(\"button\");\n\n\t\tconst icon = document.createElement(\"i\");\n\t\ticon.classList.add(\"material-icons\");\n\t\ticon.textContent = action.name;\n\t\tbtn.appendChild(icon);\n\n\t\tbtn.addEventListener(\"click\", action.handler);\n\n\t\tactions_root.appendChild(btn);\n\t}\n\n\tnote_container.appendChild(actions_root);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderNoteActions);\n\n\n//# sourceURL=webpack://task1/./src/view/renderNoteActions.js?");

/***/ }),

/***/ "./src/view/renderNoteDetails.js":
/*!***************************************!*\
  !*** ./src/view/renderNoteDetails.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../category */ \"./src/category.js\");\n\n\nfunction renderNoteDetails(note, note_container, options) {\n\t[\n\t\tnote.contents,\n\t\tnote.date.toLocaleDateString(\"en-US\"),\n\t\tnote.category,\n\t\tnote.dates,\n\t].forEach((x, i) => {\n\t\tlet column;\n\n\t\tif (i === 1 || i > 2 || options.editState === false) {\n\t\t\tcolumn = document.createElement(\"div\");\n\t\t\tcolumn.textContent = x;\n\t\t} else if (i === 0) {\n\t\t\tcolumn = document.createElement(\"input\");\n\t\t\tcolumn.classList.add(\"note-contents__input\");\n\t\t\tcolumn.placeholder = \"Type your note contents here.\";\n\t\t\tcolumn.value = x;\n\t\t} else if (i === 2) {\n\t\t\tcolumn = document.createElement(\"select\");\n\t\t\tcolumn.classList.add(\"note-category__select\");\n\n\t\t\tObject.values(_category__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).forEach((x) => {\n\t\t\t\tconst option = document.createElement(\"option\");\n\t\t\t\toption.innerText = x;\n\t\t\t\tcolumn.appendChild(option);\n\t\t\t});\n\n\t\t\tcolumn.value = x;\n\t\t}\n\n\t\tnote_container.appendChild(column);\n\t});\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderNoteDetails);\n\n\n//# sourceURL=webpack://task1/./src/view/renderNoteDetails.js?");

/***/ }),

/***/ "./src/view/renderSummaryTable.js":
/*!****************************************!*\
  !*** ./src/view/renderSummaryTable.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ \"./src/storage.js\");\n/* harmony import */ var _summaryTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../summaryTable */ \"./src/summaryTable.js\");\n\n\n\nconst summaryTable = document.getElementById(\"summary__root\");\n\nfunction renderSummaryTable() {\n\twhile (summaryTable.children.length > 1) {\n\t\tsummaryTable.lastElementChild.remove();\n\t}\n\n\tconst rows = (0,_summaryTable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].data.notes);\n\n\trows.forEach((row) => {\n\t\tconst row_elem = document.createElement(\"div\");\n\n\t\trow.forEach((column) => {\n\t\t\tconst column_elem = document.createElement(\"div\");\n\t\t\tcolumn_elem.textContent = column;\n\t\t\trow_elem.appendChild(column_elem);\n\t\t});\n\n\t\tsummaryTable.appendChild(row_elem);\n\t});\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderSummaryTable);\n\n\n//# sourceURL=webpack://task1/./src/view/renderSummaryTable.js?");

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