'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequence = require('./sequence');

Object.keys(_sequence).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sequence[key];
    }
  });
});