/*  */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["hongqi-activity-manager"] = {}));
})(this, (function (exports) { 'use strict';

    function cool() {
        console.log('ts hello world!');
    }
    var addTs = function (num, num2) { return num + num2; };

    exports.addTs = addTs;
    exports.cool = cool;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
