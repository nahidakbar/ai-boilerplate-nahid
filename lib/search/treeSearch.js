"use strict";

/**
 * Does breath first tree search.
 * 
 * Needless to say, it is only suitable for tree structures as it does not take repeated states into account. For graphs, it will run until it runs iut of memory.
 */

module.exports.treeSearch = function (paramaters) {
  return function (problem) {
    //console.log('SEARCH', problem);
    var frontier = [{
      state: problem.state,
      steps: []
    }];
    var goal = problem.goal || paramaters.goal;
    while (frontier.length > 0) {
      var leaf = frontier.shift();
      if (paramaters.isGoalState(leaf.state, goal)) {
        return leaf.steps;
      }
      for (var action in paramaters.getActions(leaf.state)) {
        var resultingState = paramaters.performAction(leaf.state, action);
        frontier.push({
          state: resultingState,
          steps: leaf.steps.concat([action])
        });
      }
    }
    return null;
  };
};