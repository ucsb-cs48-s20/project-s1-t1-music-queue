webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Retrieve.js":
/*!********************************!*\
  !*** ./components/Retrieve.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Retrieve; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table */ "./components/Table.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/gautam/Desktop/cs/48/project-s1-t1-music-queue/components/Retrieve.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Retrieve(props) {
  var _this = this;

  var obj = props.data; // create another array of songs so that you can sort it later

  var songArr = obj.map(function (item) {
    return {
      key: item._id,
      name: item.name,
      score: item.score
    };
  }); // sort array of songs; highest scores first and lowest scores last

  songArr.sort(function (a, b) {
    return a.score > b.score ? -1 : 1;
  });
  var tableComponents = songArr.map(function (item) {
    return __jsx(_Table__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: item._id,
      name: item.name,
      score: item.score,
      useEffect: props.useEffect,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    });
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("table", {
    id: "songQueue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Song"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Score"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, "Upvote"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, "Downvote")), tableComponents)));
}

/***/ })

})
//# sourceMappingURL=index.js.9a216bdeab4e477f30bb.hot-update.js.map