"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('./simpleProblemSolvingAgent'),
    simpleProblemSolvingAgent = _require.simpleProblemSolvingAgent;

var _require2 = require('../search/graphSearch'),
    graphSearch = _require2.graphSearch;

var _require3 = require('../games/SlidingBlockPuzzle'),
    SlidingBlockPuzzle = _require3.SlidingBlockPuzzle;

var _require4 = require('../common/queue'),
    fifoQueue = _require4.fifoQueue;

var assert = require('assert');

describe('simpleProblemSolvingAgent', function () {
  var play = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(puzzle, state, searchMethod) {
      var formulateGoal, search, paramaters, agent, action;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // prepare paramaters for search agent
              formulateGoal = puzzle.createGoalState.bind(puzzle);
              search = searchMethod(Object.assign(puzzle, fifoQueue));
              paramaters = {
                state: state,
                formulateGoal: formulateGoal,
                search: search
              };

              // search

              agent = simpleProblemSolvingAgent(paramaters);

              // execute
              //~ console.log('INITIAL STATE:\n' + puzzle.print(paramaters.state));

              action = void 0;

            case 5:
              _context.next = 7;
              return agent(null);

            case 7:
              _context.t0 = action = _context.sent;

              if (!(_context.t0 !== null)) {
                _context.next = 12;
                break;
              }

              //~ console.log('ACTION', action);
              paramaters.state = puzzle.performAction(paramaters.state, action);
              //~ console.log('RESULTANT STATE:\n' + puzzle.print(paramaters.state));
              _context.next = 5;
              break;

            case 12:
              return _context.abrupt('return', paramaters.state);

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function play(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  it('solve sliding puzzle', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var puzzle, state;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            puzzle = new SlidingBlockPuzzle(3, 3);
            _context2.next = 3;
            return play(puzzle, puzzle.createRandomInitialState(), graphSearch);

          case 3:
            state = _context2.sent;

            assert(puzzle.isGoalState(state, puzzle.createGoalState()));

          case 5:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  })));

  it('not solve unsolvable puzzle', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var puzzle, state;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            puzzle = new SlidingBlockPuzzle(2, 2);
            _context3.next = 3;
            return play(puzzle, {
              0: 0,
              1: 2,
              2: 1,
              3: 3,
              width: 2,
              height: 2,
              length: 4
            }, graphSearch);

          case 3:
            state = _context3.sent;

            assert(!puzzle.isGoalState(state, puzzle.createGoalState()));

          case 5:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
});