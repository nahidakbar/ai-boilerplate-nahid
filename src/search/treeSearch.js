"use strict";

module.exports.treeSearch = function (paramaters)
{
  return function (problem)
  {
    //console.log('SEARCH', problem);
    const frontier = [{
      state: problem.state,
      steps: []
    }];
    const goal = problem.goal || paramaters.goal;
    while (frontier.length > 0)
    {
      const leaf = frontier.shift();
      if (paramaters.isGoalState(leaf.state, goal))
      {
        return leaf.steps;
      }
      for (let action in paramaters.getActions(leaf.state))
      {
        const resultingState = paramaters.performAction(leaf.state, action);
        frontier.push({
          state: resultingState,
          steps: leaf.steps.concat([action])
        });
      }
    }
    return null;
  };
};
