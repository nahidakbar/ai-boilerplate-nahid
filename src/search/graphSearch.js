"use strict";

/**
 * Basic uninformed graph search.
 * @param {object} paramaters
 */
module.exports.graphSearch = function (paramaters)
{
  return async function (problem)
  {
    let frontier = paramaters.queueInsert({
      state: problem.state,
      steps: [],
      stateSerialised: paramaters.stateSerialise(problem.state)
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
        explored[leaf.stateSerialised] = true;
      }
      for (let action of paramaters.getActions(leaf.state))
      {
        const resultingState = paramaters.performAction(leaf.state, action);
        const stateSerialised = paramaters.stateSerialise(resultingState);
        if (explored[stateSerialised] === undefined)
        {
          frontier = paramaters.queueInsert({
            state: resultingState,
            steps: leaf.steps.concat([action]),
            stateSerialised: stateSerialised
          }, frontier);
        }
      }
    }
    return null;
  };
};
