webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Input.js":
/*!*****************************!*\
  !*** ./components/Input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetch */ "./utils/fetch.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Retrieve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Retrieve */ "./components/Retrieve.js");

var _jsxFileName = "/Users/gautam/Desktop/cs/48/project-s1-t1-music-queue/components/Input.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function Input() {
  // set initial hooks to keep track of state
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      score = _useState[0],
      setScore = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      sentDatabase = _useState3[0],
      setSent = _useState3[1]; // useSWR is like your own state that is backed by an API call
  // mutate w/out parameters just causes refetch of endpoint
  // you can change the arguments with a parameter see repo
  // for further documentation.


  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_2__["default"])("/api/all", _utils_fetch__WEBPACK_IMPORTED_MODULE_3__["fetch"], {
    // see example repo for explination about booleans
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    initialData: {
      result: [{
        _id: "FETCHING DATA ... ",
        name: "FETCHING DATA ... ",
        score: "FETCHING DATA ... "
      }]
    }
  }),
      data = _useSWR.data,
      mutate = _useSWR.mutate; // re-fectch data from database for initial render. mutate() does this
  // because it is the function that references the data hook above
  // React will call useEffect when any of the dependecies change.
  // Because it an empty array; you call it the first time and never again


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    mutate();
  }, []); // handles changes to name of song dynamically

  var submit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function _callee(event) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_3__["fetch"])("/api/add", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              // the body of this song is built from state
              body: JSON.stringify({
                name: name,
                score: score
              })
            }));

          case 2:
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(mutate());

          case 4:
            // update sent
            setSent(true);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }, [name, score]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }, __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx("label", {
    form: "sname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "Song Name "), __jsx("input", {
    type: "text",
    id: "sname",
    name: "sname",
    value: name,
    onChange: function onChange() {
      return setName(event.target.value);
    },
    placeholder: "enter song name ... ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  })), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, score), __jsx("button", {
    onClick: function onClick() {
      return setScore(score + 1);
    },
    className: "button_upvote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "Upvote"), __jsx("button", {
    onClick: function onClick() {
      if (score > 0) setScore(score - 1);
    },
    className: "button_downvote",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, "Downvote"), __jsx("button", {
    onClick: function onClick() {
      return submit();
    },
    className: "button",
    style: {
      verticalAlign: "middle"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, " ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, " Save to Database ")), __jsx(_Retrieve__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data,
    mutate: function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(mutate());

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ })

})
//# sourceMappingURL=index.js.7c6a06b92508f680b907.hot-update.js.map