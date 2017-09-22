'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleProblemSolvingAgent = require('./simpleProblemSolvingAgent');

Object.keys(_simpleProblemSolvingAgent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _simpleProblemSolvingAgent[key];
    }
  });
});