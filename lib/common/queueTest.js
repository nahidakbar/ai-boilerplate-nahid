"use strict";

var _require = require('./queue'),
    fifoQueue = _require.fifoQueue,
    lifoQueue = _require.lifoQueue,
    priorityQueue = _require.priorityQueue;

var assert = require('assert');

describe('queues', function () {

  function execute(queue) {
    var instance = null;

    var _arr = [1, 2, 3, 4, 5];
    for (var _i = 0; _i < _arr.length; _i++) {
      var element = _arr[_i];
      instance = queue.queueInsert(element, instance);
    }

    var output = [];

    while (!queue.queueEmpty(instance)) {
      output.push(queue.queuePop(instance));
    }

    return output;
  }

  it('lifoQueue', function () {
    assert.deepEqual(execute(lifoQueue), [5, 4, 3, 2, 1]);
  });

  it('fifoQueue', function () {
    assert.deepEqual(execute(fifoQueue), [1, 2, 3, 4, 5]);
  });

  it('priorityQueue', function () {
    function isAbove(element, aboveElement) {
      var elementDistance = Math.abs(element - 1.8);
      var aboveElementDistance = Math.abs(aboveElement - 1.8);
      return elementDistance < aboveElementDistance;
    }
    assert.deepEqual(execute(priorityQueue(isAbove)), [2, 1, 3, 4, 5]);
  });
});