"use strict";

/**
 * Basic uninformed graph search.
 */
module.exports.graphSearch = function (paramaters)
{
  return async function (problem)
  {
    let frontier = paramaters.queueInsert({
      state: problem.state,
      steps: [],
      serialised: paramaters.serialise(problem.state)
    }, null);
    const explored = {};
    const goal = problem.goal || paramaters.goal;
    while (frontier.length > 0)
    {
      const leaf = paramaters.queuePop(frontier);
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
          frontier = paramaters.queueInsert({
            state: resultingState,
            steps: leaf.steps.concat([action]),
            serialised: serialised
          }, frontier);
        }
      }
    }
    return null;
  };
};
