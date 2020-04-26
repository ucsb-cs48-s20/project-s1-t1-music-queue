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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetch */ "./utils/fetch.js");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Table */ "./components/Table.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/gautam/Desktop/cs/48/project-s1-t1-music-queue/components/Retrieve.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // //create your forceUpdate hook
// function useForceUpdate() {
//   console.log("updating...");
//   const [value, setValue] = useState(0); // integer state
//   return () => setValue(value => ++value); // update the state to force render
// }

function Retrieve(props) {
  var _this = this;

  // swr returns a data and error parameter
  // const forceUpdate = useForceUpdate();
  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_1__["default"])("/api/all", _utils_fetch__WEBPACK_IMPORTED_MODULE_2__["fetch"], {
    // By default, useSWR will call the endpoint we specified (in this case, /api/all) every time we click away from
    // the page. This can be really useful if we want to make sure the web app is always showing the latest data,
    // but in this case, we don't need that behavior. See what happens if you set these options to true or remove them!
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  }),
      data = _useSWR.data,
      error = _useSWR.error;

  if (error) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 12
      }
    }, "Failed to load");
  }

  if (!data) {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 12
      }
    }, "Loading");
  }

  var obj = JSON.parse(JSON.stringify(data.result));
  console.log("Retrieve: " + obj);
  var tableComponents = obj.map(function (item) {
    return __jsx(_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item._id,
      song: item.song.song,
      score: item.song.score,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    });
  }); // {data} can't do this with Javascript objects

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "Song"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "Score")), tableComponents)));
}

/***/ })

})
//# sourceMappingURL=index.js.768f896b90cfe7bc5474.hot-update.js.map