"use strict";

const
{
  fifoQueue,
  lifoQueue,
  priorityQueue
} = require('./queue');
const assert = require('assert');

describe('queues', function ()
{

  function execute(queue)
  {
    let instance = null;

    for (let element of [1, 2, 3, 4, 5])
    {
      instance = queue.queueInsert(element, instance);
    }

    let output = [];

    while (!queue.queueIsEmpty(instance))
    {
      output.push(queue.queuePop(instance));
    }

    return output;
  }

  it(`lifoQueue`, function ()
  {
    assert.deepEqual(execute(lifoQueue), [5, 4, 3, 2, 1]);
  })

  it(`fifoQueue`, function ()
  {
    assert.deepEqual(execute(fifoQueue), [1, 2, 3, 4, 5]);
  })

  it(`priorityQueue`, function ()
  {
    function isAbove(element, aboveElement)
    {
      const elementDistance = Math.abs(element - 1.8);
      const aboveElementDistance = Math.abs(aboveElement - 1.8);
      return elementDistance < aboveElementDistance;
    }
    assert.deepEqual(execute(priorityQueue(isAbove)), [2, 1, 3, 4, 5]);
  })

})
