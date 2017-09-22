"use strict";

/**
 * Basic uninformed graph search.
 */
module.exports.graphSearch = function (paramaters)
{
  return async function (problem)
  {
    const frontier = [{
      state: problem.state,
      steps: [],
      serialised: paramaters.serialise(problem.state)
    }];
    const explored = {};
    const goal = problem.goal || paramaters.goal;
    while (frontier.length > 0)
    {
      const leaf = frontier.shift();
      if (paramaters.isGoalState(leaf.state, goal))
      {
        return leaf.steps;
      }
      else
      {
        explored[leaf.serialised] = true;
      }
      for (let action of paramaters.getActions(leaf.state))
      {
        const resultingState = paramaters.performAction(leaf.state, action);
        const serialised = paramaters.serialise(resultingState);
        if (explored[serialised] === undefined)
        {
          frontier.push({
            state: resultingState,
            steps: leaf.steps.concat([action]),
            serialised: serialised
          });
        }
      }
    }
    return null;
  };
};
