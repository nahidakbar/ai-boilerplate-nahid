"use strict";

class SlidingBlockPuzzle
{
  /**
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height)
  {
    this.width = width;
    this.height = height;
  }

  createRandomInitialState()
  {
    let state = this.createGoalState();
    
    let steps = 50;
    
    while (steps --> 0)
    {
      let actions = this.getActions(state);
      let action = actions[Math.floor(actions.length * Math.random())];
      state = this.performAction(state, action);
    }
    
    return state;
  }

  createGoalState()
  {
    let state = {
      width: this.width,
      height: this.height,
      length: this.width * this.height
    };
    for (let index = 0; index < state.length; index++)
    {
      state[index] = index;
    }
    return state;
  }

  print(state)
  {
    let output = [];
    for (let yIndex = 0; yIndex < state.height; yIndex++)
    {
      let line = [];
      for (let xIndex = 0; xIndex < state.width; xIndex++)
      {
        line.push(state[yIndex * state.width + xIndex]);
      }
      output.push(line.join(' '))
    }
    return output.join('\n')
  }

  isGoalState(state, goal)
  {
    for (let index = 0; index < state.length; index++)
    {
      if (state[index] !== goal[index])
      {
        return false;
      }
    }
    return true;
  }

  getActions(state)
  {
    const actions = [];
    const emptyIndex = Array.prototype.indexOf.call(state, 0)
    const emptyX = emptyIndex % state.width;
    const emptyY = (emptyIndex - emptyX) / state.width;

    if (emptyX > 0)
    {
      actions.push(emptyIndex - 1)
    }

    if (emptyX + 1 < state.width)
    {
      actions.push(emptyIndex + 1)
    }

    if (emptyY > 0)
    {
      actions.push(emptyIndex - state.width)
    }

    if (emptyY + 1 < state.height)
    {
      actions.push(emptyIndex + state.width)
    }

    return actions;
  }

  performAction(state, action)
  {
    state = Object.assign({}, state);

    const emptyIndex = Array.prototype.indexOf.call(state, 0)

    state[emptyIndex] = state[action];
    state[action] = 0;

    return state;
  }
  
  serialise(state)
  {
    return Array.prototype.join.call(state, ',');
  }

}

module.exports.SlidingBlockPuzzle = SlidingBlockPuzzle;
