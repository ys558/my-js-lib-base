/*  */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["hongqi-activity-manager"] = {}));
})(this, (function (exports) { 'use strict';

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
