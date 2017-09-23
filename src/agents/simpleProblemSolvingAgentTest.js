"use strict";

const
{
  simpleProblemSolvingAgent
} = require('./simpleProblemSolvingAgent');
const
{
  graphSearch
} = require('../search/graphSearch');
const
{
  SlidingBlockPuzzle
} = require('../games/SlidingBlockPuzzle');
const
{
  fifoQueue
} = require('../common/queue');

const assert = require('assert');

describe(`simpleProblemSolvingAgent`, function ()
{
  async function play(puzzle, state, searchMethod)
  {
    // prepare paramaters for search agent
    const formulateGoal = puzzle.createGoalState.bind(puzzle);
    const search = searchMethod(Object.assign(puzzle, fifoQueue));
    const paramaters = {
      state,
      formulateGoal,
      search
    };

    // search
    const agent = simpleProblemSolvingAgent(paramaters);

    // execute
    //~ console.log('INITIAL STATE:\n' + puzzle.print(paramaters.state));
    let action;
    while ((action = await agent(null)) !== null)
    {
      //~ console.log('ACTION', action);
      paramaters.state = puzzle.performAction(paramaters.state, action);
      //~ console.log('RESULTANT STATE:\n' + puzzle.print(paramaters.state));
    }
    //~ console.log('FINAL STATE:\n' + puzzle.print(paramaters.state));
    return paramaters.state;

  }


  it(`solve sliding puzzle`, async function ()
  {
    const puzzle = new SlidingBlockPuzzle(3, 3);
    const state = await play(puzzle, puzzle.createRandomInitialState(), graphSearch);
    assert(puzzle.isGoalState(state, puzzle.createGoalState()))
  });

  it(`not solve unsolvable puzzle`, async function ()
  {
    const puzzle = new SlidingBlockPuzzle(2, 2);
    const state = await play(puzzle, {
      0: 0,
      1: 2,
      2: 1,
      3: 3,
      width: 2,
      height: 2,
      length: 4
    }, graphSearch);
    assert(!puzzle.isGoalState(state, puzzle.createGoalState()))
  });


});
