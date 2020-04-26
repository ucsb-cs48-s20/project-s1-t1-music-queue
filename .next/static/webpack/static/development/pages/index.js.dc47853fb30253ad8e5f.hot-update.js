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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css */ "./components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/gautam/Desktop/cs/48/project-s1-t1-music-queue/components/Input.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Input = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Input, _React$Component);

  var _super = _createSuper(Input);

  function Input() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Input);

    _this = _super.call(this);
    _this.state = {
      score: 0,
      name: "",
      sent_to_database: false
    };
    _this.incrementScore = _this.incrementScore.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.decrementScore = _this.decrementScore.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.nameChange = _this.nameChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.submit = _this.submit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  } // increments the score of the particular song


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Input, [{
    key: "incrementScore",
    value: function incrementScore() {
      this.setState(function (prevState) {
        return {
          score: prevState.score + 1,
          name: prevState.name,
          sent_to_database: false
        };
      });
    } // decrements the score of the particular song

  }, {
    key: "decrementScore",
    value: function decrementScore() {
      this.setState(function (prevState) {
        // if the score is 0; don't go negative!
        if (prevState.score == 0) {
          return {
            score: 0,
            name: prevState.name,
            sent_to_database: false
          };
        } // score is not 0; subtract 1
        else {
            return {
              score: prevState.score - 1,
              name: prevState.name,
              sent_to_database: false
            };
          }
      });
    } // handles changes to name of song dynamically

  }, {
    key: "nameChange",
    value: function nameChange() {
      this.setState(function (prevState) {
        return {
          score: prevState.score,
          name: event.target.value,
          sent_to_database: false
        };
      });
    } // submit information to the MongoDB Database

  }, {
    key: "submit",
    value: function submit() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submit$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // update state to conditionally render message to user
              this.setState(function (prevState) {
                return {
                  score: prevState.score,
                  name: prevState.name,
                  sent_to_database: true
                };
              });
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("/api/add", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                // the body of this message is built from state
                body: JSON.stringify({
                  song: this.state.name,
                  score: this.state.score
                })
              }));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 7
        }
      }, __jsx("form", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }, __jsx("label", {
        form: "sname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }
      }, "Song Name "), __jsx("input", {
        type: "text",
        id: "sname",
        name: "sname",
        value: this.state.name,
        onChange: this.nameChange,
        placeholder: "enter song name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }
      })), __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }
      }, this.state.score), __jsx("button", {
        onClick: this.incrementScore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 9
        }
      }, "Upvote"), __jsx("button", {
        onClick: this.decrementScore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 9
        }
      }, "Downvote"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 9
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }
      }), __jsx("button", {
        onClick: this.submit,
        className: "button",
        style: {
          verticalAlign: "middle"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 9
        }
      }, " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }
      }, " Save to Database ")), __jsx("h1", {
        style: {
          display: this.state.sent_to_database ? "block" : "none"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }
      }, " ", this.state.name, " saved to MongoDB Database", " "));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ })

})
//# sourceMappingURL=index.js.dc47853fb30253ad8e5f.hot-update.js.map