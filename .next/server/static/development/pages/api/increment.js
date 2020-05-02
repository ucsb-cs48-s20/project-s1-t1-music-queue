module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/increment.js":
/*!********************************!*\
  !*** ./pages/api/increment.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/mongodb */ "./utils/mongodb.js");
 // async api endpoint to create a new song
// handles the case where a dupicate song is attempted to be added

async function incrementSong(req, res) {
  const song = req.body;
  console.log("incrementing " + song.name); // if the song passed is null
  // deal with this edge case

  if (!song) {
    throw {
      status: 400,
      message: "song was not found"
    };
  } // create MongoDB client as well as reference to MongoDB collection


  const client = await Object(_utils_mongodb__WEBPACK_IMPORTED_MODULE_0__["initDatabase"])();
  const users = client.collection("song_name"); // find document with song name and decrement the score

  const result = await users.findOneAndUpdate({
    name: song.name
  }, {
    $inc: {
      score: 1
    }
  });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({
    result
  }));
}

async function performAction(req, res) {
  if (req.method == "PUT") {
    return incrementSong(req, res);
  } // request is not a GET or POST;
  // in the context of this spike throw an exception but
  // in the full application you should also write out a delete
  // note: status 405 stands for indicating that the specified request HTTP method was received and recognized by the server,
  // but the server has rejected that particular method for the requested resource.


  throw {
    status: 405
  };
}

/* harmony default export */ __webpack_exports__["default"] = (performAction);

/***/ }),

/***/ "./utils/config.js":
/*!*************************!*\
  !*** ./utils/config.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (true) {
  /**
   * MongoDB URI exposed to the server.
   */
  module.exports = {
    MONGODB_URI: process.env.MONGODB_URI
  };
}

/***/ }),

/***/ "./utils/mongodb.js":
/*!**************************!*\
  !*** ./utils/mongodb.js ***!
  \**************************/
/*! exports provided: initDatabase, serializeDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDatabase", function() { return initDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeDocument", function() { return serializeDocument; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./utils/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);


const client = new mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"](_config__WEBPACK_IMPORTED_MODULE_1___default.a.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
let connected = false;
async function initDatabase() {
  if (!connected) {
    await client.connect();
    connected = true;
  }

  return client.db("Titles");
} // converts JSON object into BSON

function serializeDocument(doc, options = {}) {
  // TODO remove side effects
  const {
    idFields = ["_id"]
  } = options;

  for (const idField of idFields) {
    if (doc[idField]) {
      doc[idField] = doc[idField].toString();
    }
  }

  return doc;
}

/***/ }),

/***/ 6:
/*!**************************************!*\
  !*** multi ./pages/api/increment.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gautam/Desktop/cs/48/project-s1-t1-music-queue/pages/api/increment.js */"./pages/api/increment.js");


/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });
//# sourceMappingURL=increment.js.map