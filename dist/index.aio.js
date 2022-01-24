/*  */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["hongqi-activity-manager"] = {}));
})(this, (function (exports) { 'use strict';

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var createClass = createCommonjsModule(function (module) {
	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    Object.defineProperty(Constructor, "prototype", {
	      writable: false
	    });
	    return Constructor;
	  }

	  module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(createClass);

	var classCallCheck = createCommonjsModule(function (module) {
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
	});
	unwrapExports(classCallCheck);

	function foo() {
	  console.log('Hello World');
	}
	var add = function add(num1, num2) {
	  return num1 + num2;
	};

	exports.add = add;
	exports.foo = foo;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
