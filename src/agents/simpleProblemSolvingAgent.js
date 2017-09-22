"use strict";

const
{
  sequenceIsEmpty,
  sequenceFirst,
  sequenceRest
} = require('../common/sequence');

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
module.exports.simpleProblemSolvingAgent = function (parameters)
{
  parameters.updateState = parameters.updateState || defaultUpdateState;
  parameters.formulateProblem = parameters.formulateProblem || defaultFormulateProblem;
  return async function (percept)
  {
    parameters.state = await parameters.updateState(parameters.state, percept);
    if (sequenceIsEmpty(parameters.sequence))
    {
      const goal = await parameters.formulateGoal(parameters.state);
      const problem = await parameters.formulateProblem(parameters.state, goal);
      parameters.sequence = await parameters.search(problem)
    }
    if (sequenceIsEmpty(parameters.sequence))
    {
      return null;
    }
    else
    {
      const action = sequenceFirst(parameters.sequence);
      parameters.sequence = sequenceRest(parameters.sequence);
      return action;
    }
  };
}

/**
 * @private
 */
function defaultUpdateState(state, percept)
{
  return state;
}

/**
 * @private
 */
function defaultFormulateProblem(state, goal)
{
  return {
    state,
    goal
  };
}
