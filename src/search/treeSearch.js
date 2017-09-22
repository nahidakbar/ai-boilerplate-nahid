"use strict";


//~ /**
 //~ * Does breath first tree search.
 //~ * 
 //~ * Needless to say, it is only suitable for tree structures as it does not take repeated states into account. For graphs, it will run until it runs iut of memory.
 //~ */
//~ module.exports.treeSearch = function (paramaters)
//~ {
  //~ return function (problem)
  //~ {
    //~ //console.log('SEARCH', problem);
    //~ const frontier = [{
      //~ state: problem.state,
      //~ steps: []
    //~ }];
    //~ const goal = problem.goal || paramaters.goal;
    //~ while (frontier.length > 0)
    //~ {
      //~ const leaf = frontier.shift();
      //~ if (paramaters.isGoalState(leaf.state, goal))
      //~ {
        //~ return leaf.steps;
      //~ }
      //~ for (let action in paramaters.getActions(leaf.state))
      //~ {
        //~ const resultingState = paramaters.performAction(leaf.state, action);
        //~ frontier.push({
          //~ state: resultingState,
          //~ steps: leaf.steps.concat([action])
        //~ });
      //~ }
    //~ }
    //~ return null;
  //~ };
//~ };
