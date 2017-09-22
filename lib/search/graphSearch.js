"use strict";

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports.graphSearch = function (paramaters) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(problem) {
      var frontier, explored, goal, leaf, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, action, resultingState, serialised;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              frontier = [{
                state: problem.state,
                steps: [],
                serialised: paramaters.serialise(problem.state)
              }];
              explored = {};
              goal = problem.goal || paramaters.goal;

            case 3:
              if (!(frontier.length > 0)) {
                _context.next = 31;
                break;
              }

              leaf = frontier.shift();

              if (!paramaters.isGoalState(leaf.state, goal)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", leaf.steps);

            case 9:
              explored[leaf.serialised] = true;

            case 10:
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 13;

              for (_iterator = paramaters.getActions(leaf.state)[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                action = _step.value;
                resultingState = paramaters.performAction(leaf.state, action);
                serialised = paramaters.serialise(resultingState);

                if (explored[serialised] === undefined) {
                  frontier.push({
                    state: resultingState,
                    steps: leaf.steps.concat([action]),
                    serialised: serialised
                  });
                }
              }
              _context.next = 21;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](13);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 21:
              _context.prev = 21;
              _context.prev = 22;

              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }

            case 24:
              _context.prev = 24;

              if (!_didIteratorError) {
                _context.next = 27;
                break;
              }

              throw _iteratorError;

            case 27:
              return _context.finish(24);

            case 28:
              return _context.finish(21);

            case 29:
              _context.next = 3;
              break;

            case 31:
              return _context.abrupt("return", null);

            case 32:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[13, 17, 21, 29], [22,, 24, 28]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};