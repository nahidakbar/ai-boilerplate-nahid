"use strict";

/**
 * Basic uninformed graph search.
 * @param {object} paramaters
 */
module.exports.graphSearch = function (paramaters)
{
  paramaters.generateResult = paramaters.generateResult || defaultGenerateResult;
  paramaters.stepCost = paramaters.stepCost || defaultStepCost;
  return async function (problem)
  {
    let frontier = paramaters.queueInsert({
      state: problem.state,
      stateSerialised: paramaters.stateSerialise(problem.state),
      parent: null,
      cost: 0,
    }, null);
    const explored = {};
    const goal = problem.goal || paramaters.goal;
    while (frontier.length > 0)
    {
      const leaf = paramaters.queuePop(frontier);
      if (paramaters.isGoalState(leaf.state, goal))
      {
        return paramaters.generateResult(leaf);
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
            action: action,
            stateSerialised: stateSerialised,
            parent: leaf,
            cost: leaf.cost + paramaters.stepCost(leaf.state, action)
          }, frontier);
        }
      }
    }
    return null;
  };
};

function defaultGenerateResult(leaf)
{
  let sequence = [];
  while (leaf)
  {
    if (leaf.action !== undefined)
    {
      sequence.unshift(leaf.action)
    }
    leaf = leaf.parent;
  }
  return sequence;
}

function defaultStepCost(state, action)
{
  return 1;
}
