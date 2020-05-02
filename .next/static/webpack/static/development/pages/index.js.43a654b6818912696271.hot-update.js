webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Table.js":
/*!*****************************!*\
  !*** ./components/Table.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetch */ "./utils/fetch.js");

var _jsxFileName = "/Users/gautam/Desktop/cs/48/project-s1-t1-music-queue/components/Table.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Table(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.score),
      score = _useState[0],
      setScore = _useState[1]; // this callback renders the score when intially
  // rendered


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setScore(props.score);
  }, [props.score]); // handles changes when upvoting score of each of song dynamically

  var increment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function _callee(event) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_2__["fetch"])("/api/increment", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              // the body of this song is built from state
              body: JSON.stringify({
                name: props.name
              })
            }));

          case 2:
            // forces a call to the hook useSWR
            props.mutate();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }, [score]); // handles changes when downvoting score of each of song dynamically

  var decrement = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function _callee2(event) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_2__["fetch"])("/api/decrement", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              // the body of this song is built from state
              body: JSON.stringify({
                name: props.name
              })
            }));

          case 2:
            // forces a call to the hook useSWR
            props.mutate();

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  }, [score]);
  return __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, props.name), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, score), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "button_upvote",
    onClick: function onClick() {
      setScore(score + 1);
      increment();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "\u2191"), __jsx("button", {
    className: "button_downvote",
    onClick: function onClick() {
      if (score > 0) {
        setScore(score - 1);
      }

      decrement();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, " ", "\u2193")));
}

/***/ })

})
//# sourceMappingURL=index.js.43a654b6818912696271.hot-update.js.map