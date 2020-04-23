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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "./components/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-connect */ "./node_modules/next-connect/lib/index.js");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_9__);







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
      // // save songName and score to send to mongoDB database
      // const songName = this.state.name;
      // const score = this.state.score;
      // const MongoClient = require("mongodb").MongoClient; // MongoDB module that is required to connect to a MongoDB database
      // // Note that the password for the MongoClient is "MusicQ"
      // const uri =
      //   "mongodb+srv://gautam_mundewadi:<MusicQ>@cluster0-yxuih.azure.mongodb.net/test?retryWrites=true&w=majority";
      // const client = new MongoClient(uri, { useNewUrlParser: true });
      // // create a new listing in the database
      // this.createListing(client, { hello: "test" });
      // update state to conditional render message to user
      this.setState(function (prevState) {
        return {
          score: prevState.score,
          name: prevState.name,
          sent_to_database: true
        };
      });
    } // create a lisiting of a song to the MongoDB Database.

  }, {
    key: "createListing",
    value: function createListing(client, newListing) {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function createListing$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(client.db("test").collection("devices").insertOne(newListing));

            case 2:
              result = _context.sent;
              console.log("New listing created with the following id: ".concat(result.insertedId));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 7
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 9
        }
      }, "Input to MongoDB Database"), __jsx("form", {
        className: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }
      }, __jsx("label", {
        "for": "sname",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
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
          lineNumber: 106,
          columnNumber: 11
        }
      })), __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 9
        }
      }, this.state.score), __jsx("button", {
        onClick: this.incrementScore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 9
        }
      }, "Upvote"), __jsx("button", {
        onClick: this.decrementScore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 9
        }
      }, "Downvote"), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 9
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
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
          lineNumber: 124,
          columnNumber: 9
        }
      }, " ", __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 11
        }
      }, " Save to Database ")), __jsx("h1", {
        style: {
          display: this.state.sent_to_database ? "block" : "none"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 9
        }
      }, " ", this.state.name, " saved to MongoDB Database", " "));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./node_modules/next-connect/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/next-connect/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Trouter = __webpack_require__(/*! trouter */ "./node_modules/trouter/index.mjs");

function onerror(err, req, res) {
  res.statusCode = err.code || err.status || 500;
  res.end(err.message || res.statusCode.toString());
}

const isResSent = (res) => res.finished || res.headersSent || res.writableEnded;
const mount = (fn) => (fn.routes ? fn.handle.bind(fn) : fn);

module.exports = ({
  onError = onerror,
  onNoMatch = onerror.bind(null, { code: 404, message: 'not found' }),
} = {}) => {
  function connect(req, res) {
    return connect.apply(req, res).then(
      () => !isResSent(res) && onNoMatch(req, res),
      (err) => onError(err, req, res)
    );
  }
  const router = new Trouter();
  connect.routes = [];
  function add(...args) {
    if (typeof args[1] !== 'string') args.splice(1, 0, '*');
    router.add.apply(connect, args);
    return connect;
  }
  connect.get = add.bind(connect, 'GET');
  connect.head = add.bind(connect, 'HEAD');
  connect.post = add.bind(connect, 'POST');
  connect.put = add.bind(connect, 'PUT');
  connect.delete = add.bind(connect, 'DELETE');
  connect.options = add.bind(connect, 'OPTIONS');
  connect.trace = add.bind(connect, 'TRACE');
  connect.patch = add.bind(connect, 'PATCH');
  connect.use = function use(base, ...fns) {
    if (typeof base === 'string') {
      router.use.apply(connect, [base, fns.map(mount)]);
    } else router.use.apply(connect, ['/', [base, ...fns].map(mount)]);
    return connect;
  };
  connect.find = router.find.bind(connect);
  connect.apply = function apply(req, res) {
    return new Promise((resolve, reject) => {
      this.handle(req, res, (err) => (err ? reject(err) : resolve()));
    });
  };
  connect.handle = function handle(req, res, done) {
    const { handlers } = this.find(req.method, req.url);
    let i = 0;
    const len = handlers.length;
    const next = (err) =>
      i < len
        ? err
          ? onError(err, req, res, next)
          : Promise.resolve(handlers[i++](req, res, next)).catch(next)
        : done && done(err);
    next();
  };

  return connect;
};


/***/ }),

/***/ "./node_modules/regexparam/dist/regexparam.js":
/*!****************************************************!*\
  !*** ./node_modules/regexparam/dist/regexparam.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (str, loose) {
	if (str instanceof RegExp) return { keys:false, pattern:str };
	var c, o, tmp, ext, keys=[], pattern='', arr = str.split('/');
	arr[0] || arr.shift();

	while (tmp = arr.shift()) {
		c = tmp[0];
		if (c === '*') {
			keys.push('wild');
			pattern += '/(.*)';
		} else if (c === ':') {
			o = tmp.indexOf('?', 1);
			ext = tmp.indexOf('.', 1);
			keys.push( tmp.substring(1, !!~o ? o : !!~ext ? ext : tmp.length) );
			pattern += !!~o && !~ext ? '(?:/([^/]+?))?' : '/([^/]+?)';
			if (!!~ext) pattern += (!!~o ? '?' : '') + '\\' + tmp.substring(ext);
		} else {
			pattern += '/' + tmp;
		}
	}

	return {
		keys: keys,
		pattern: new RegExp('^' + pattern + (loose ? '(?=$|\/)' : '\/?$'), 'i')
	};
}


/***/ }),

/***/ "./node_modules/trouter/index.mjs":
/*!****************************************!*\
  !*** ./node_modules/trouter/index.mjs ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trouter; });
/* harmony import */ var regexparam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regexparam */ "./node_modules/regexparam/dist/regexparam.js");


class Trouter {
	constructor() {
		this.routes = [];

		this.all = this.add.bind(this, '');
		this.get = this.add.bind(this, 'GET');
		this.head = this.add.bind(this, 'HEAD');
		this.patch = this.add.bind(this, 'PATCH');
		this.options = this.add.bind(this, 'OPTIONS');
		this.connect = this.add.bind(this, 'CONNECT');
		this.delete = this.add.bind(this, 'DELETE');
		this.trace = this.add.bind(this, 'TRACE');
		this.post = this.add.bind(this, 'POST');
		this.put = this.add.bind(this, 'PUT');
	}

	use(route, ...fns) {
		let handlers = [].concat.apply([], fns);
		let { keys, pattern } = regexparam__WEBPACK_IMPORTED_MODULE_0__(route, true);
		this.routes.push({ keys, pattern, method:'', handlers });
		return this;
	}

	add(method, route, ...fns) {
		let { keys, pattern } = regexparam__WEBPACK_IMPORTED_MODULE_0__(route);
		let handlers = [].concat.apply([], fns);
		this.routes.push({ keys, pattern, method, handlers });
		return this;
	}

	find(method, url) {
		let isHEAD=(method === 'HEAD');
		let i=0, j=0, k, tmp, arr=this.routes;
		let matches=[], params={}, handlers=[];
		for (; i < arr.length; i++) {
			tmp = arr[i];
			if (tmp.method.length === 0 || tmp.method === method || isHEAD && tmp.method === 'GET') {
				if (tmp.keys === false) {
					matches = tmp.pattern.exec(url);
					if (matches === null) continue;
					if (matches.groups !== void 0) for (k in matches.groups) params[k]=matches.groups[k];
					tmp.handlers.length > 1 ? (handlers=handlers.concat(tmp.handlers)) : handlers.push(tmp.handlers[0]);
				} else if (tmp.keys.length > 0) {
					matches = tmp.pattern.exec(url);
					if (matches === null) continue;
					for (j=0; j < tmp.keys.length;) params[tmp.keys[j]]=matches[++j];
					tmp.handlers.length > 1 ? (handlers=handlers.concat(tmp.handlers)) : handlers.push(tmp.handlers[0]);
				} else if (tmp.pattern.test(url)) {
					tmp.handlers.length > 1 ? (handlers=handlers.concat(tmp.handlers)) : handlers.push(tmp.handlers[0]);
				}
			} // else not a match
		}

		return { params, handlers };
	}
}


/***/ })

})
//# sourceMappingURL=index.js.3e3722c9385edd6df932.hot-update.js.map