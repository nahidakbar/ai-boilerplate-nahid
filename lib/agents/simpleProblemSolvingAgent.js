"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('../common/sequence'),
    sequenceIsEmpty = _require.sequenceIsEmpty,
    sequenceFirst = _require.sequenceFirst,
    sequenceRest = _require.sequenceRest;

/**
 * Simple problem solving agent.
 * 
 * Defines problem based on state of the world, searches for a sequence of steps to solve it and execute said sequence of steps.
 * 
 * It is a open loop system - ignores precepts during execution phase. I.e, it is only good for static, discrete, observable, deterministic systems. 
 * 
 * @param {object} parameters
 * @param {State} parameters.state initial state
 * @param {function(state:State, percept:Percept):State} [parameters.updateState] function to update parameters
 * @param {function(state:State):Goal} parameters.formulateGoal function to formulate goal from current state
 * @param {function(state:State,goal:Goal):Problem} [parameters.formulateProblem] function to formulate problem object from state and goal. By default it just puts state and goal into an object.
 * @param {function(problem:Problem):Sequence} parameters.search search for solution to problem
 * @return {function(percept:Percept):Action} an agent function
 */


module.exports.simpleProblemSolvingAgent = function (parameters) {
  parameters.updateState = parameters.updateState || defaultUpdateState;
  parameters.formulateProblem = parameters.formulateProblem || defaultFormulateProblem;
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(percept) {
      var goal, problem, action;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return parameters.updateState(parameters.state, percept);

            case 2:
              parameters.state = _context.sent;

              if (!sequenceIsEmpty(parameters.sequence)) {
                _context.next = 13;
                break;
              }

              _context.next = 6;
              return parameters.formulateGoal(parameters.state);

            case 6:
              goal = _context.sent;
              _context.next = 9;
              return parameters.formulateProblem(parameters.state, goal);

            case 9:
              problem = _context.sent;
              _context.next = 12;
              return parameters.search(problem);

            case 12:
              parameters.sequence = _context.sent;

            case 13:
              if (!sequenceIsEmpty(parameters.sequence)) {
                _context.next = 17;
                break;
              }

              return _context.abrupt("return", null);

            case 17:
              action = sequenceFirst(parameters.sequence);

              parameters.sequence = sequenceRest(parameters.sequence);
              return _context.abrupt("return", action);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/**
 * @private
 */
function defaultUpdateState(state, percept) {
  return state;
}

/**
 * @private
 */
function defaultFormulateProblem(state, goal) {
  return {
    state: state,
    goal: goal
  };
}