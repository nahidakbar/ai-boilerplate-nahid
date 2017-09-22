"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SlidingBlockPuzzle = function () {
  /**
   * @param {number} width
   * @param {number} height
   */
  function SlidingBlockPuzzle(width, height) {
    _classCallCheck(this, SlidingBlockPuzzle);

    this.width = width;
    this.height = height;
  }

  _createClass(SlidingBlockPuzzle, [{
    key: 'createRandomInitialState',
    value: function createRandomInitialState() {
      var state = this.createGoalState();

      var steps = 50;

      while (steps-- > 0) {
        var actions = this.getActions(state);
        var action = actions[Math.floor(actions.length * Math.random())];
        state = this.performAction(state, action);
      }

      return state;
    }
  }, {
    key: 'createGoalState',
    value: function createGoalState() {
      var state = {
        width: this.width,
        height: this.height,
        length: this.width * this.height
      };
      for (var index = 0; index < state.length; index++) {
        state[index] = index;
      }
      return state;
    }
  }, {
    key: 'print',
    value: function print(state) {
      var output = [];
      for (var yIndex = 0; yIndex < state.height; yIndex++) {
        var line = [];
        for (var xIndex = 0; xIndex < state.width; xIndex++) {
          line.push(state[yIndex * state.width + xIndex]);
        }
        output.push(line.join(' '));
      }
      return output.join('\n');
    }
  }, {
    key: 'isGoalState',
    value: function isGoalState(state, goal) {
      for (var index = 0; index < state.length; index++) {
        if (state[index] !== goal[index]) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'getActions',
    value: function getActions(state) {
      var actions = [];
      var emptyIndex = Array.prototype.indexOf.call(state, 0);
      var emptyX = emptyIndex % state.width;
      var emptyY = (emptyIndex - emptyX) / state.width;

      if (emptyX > 0) {
        actions.push(emptyIndex - 1);
      }

      if (emptyX + 1 < state.width) {
        actions.push(emptyIndex + 1);
      }

      if (emptyY > 0) {
        actions.push(emptyIndex - state.width);
      }

      if (emptyY + 1 < state.height) {
        actions.push(emptyIndex + state.width);
      }

      return actions;
    }
  }, {
    key: 'performAction',
    value: function performAction(state, action) {
      state = Object.assign({}, state);

      var emptyIndex = Array.prototype.indexOf.call(state, 0);

      state[emptyIndex] = state[action];
      state[action] = 0;

      return state;
    }
  }, {
    key: 'serialise',
    value: function serialise(state) {
      return Array.prototype.join.call(state, ',');
    }
  }]);

  return SlidingBlockPuzzle;
}();

module.exports.SlidingBlockPuzzle = SlidingBlockPuzzle;