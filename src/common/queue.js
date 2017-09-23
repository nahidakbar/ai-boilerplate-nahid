"use strict";

/**
 * @typedef {Array} Queue
 * @desc Queues are Arrays in this codebase.
 * 
 * Three types of queues are available:
 * <li> FIFO queues
 * <li> LIFO queues
 * <li> Priority queues
 */

/**
 * queue empty test
 */
function queueIsEmpty(queue)
{
  return !queue || !queue.length;
}

/**
 * array.pop
 */
function lifoQueuePop(queue)
{
  return queue.pop()
}

/**
 * array.shift
 */
function fifoQueuePop(queue)
{
  return queue.shift()
}

/**
 * array.push
 */
function queueInsert(element, queue)
{
  if (!queue)
  {
    return [element];
  }
  else
  {
    queue.push(element);
    return queue;
  }
}

/**
 * array.push + sift-up
 */
function priorityQueueInsert(isAbove)
{
  return function (element, queue)
  {
    if (!queue)
    {
      return [element];
    }
    else
    {
      queue.push(element);
      heapSiftUp(queue, queue.length - 1, isAbove);
      return queue;
    }
  }
}

/**
 * sift-up implementation
 */
function heapSiftUp(heap, index, isAbove)
{
  if (index !== 0)
  {
    const parentIndex = index >> 1;
    if (isAbove(heap[index], heap[parentIndex]))
    {
      const tmp = heap[parentIndex];
      heap[parentIndex] = heap[index];
      heap[index] = tmp;
      heapSiftUp(heap, parentIndex, isAbove);
    }
  }
}

/**
 * sift-down implementation
 */
function heapSiftDown(heap, index, isAbove)
{
  const leftIndex = index << 1;
  const rightIndex = leftIndex + 1;
  let maxIndex;
  if (rightIndex >= heap.length)
  {
    if (leftIndex >= heap.length)
    {
      return;
    }
    else
    {
      maxIndex = leftIndex;
    }
  }
  else
  {
    if (isAbove(heap[leftIndex], heap[rightIndex]))
    {
      maxIndex = leftIndex;
    }
    else
    {
      maxIndex = rightIndex;
    }
  }
  if (isAbove(heap[maxIndex], heap[index]))
  {
    const temp = heap[index];
    heap[index] = heap[maxIndex];
    heap[maxIndex] = temp;
    heapSiftDown(heap, maxIndex, isAbove)
  }
}

/**
 * array.shift + array.pop + array.unshift + shft-down
 */
function priorityQueuePop(isAbove)
{
  return function (queue)
  {
    let highest = queue[0];
    queue[0] = queue[queue.length - 1];
    queue.pop();
    heapSiftDown(queue, 0, isAbove);
    return highest;
  };
}

/**
 * plain array; uses array.pop for popping
 */
module.exports.lifoQueue = {
  queueIsEmpty: queueIsEmpty,
  queuePop: lifoQueuePop,
  queueInsert: queueInsert,
}

/**
 * plain array; uses array.shift for popping
 */
module.exports.fifoQueue = {
  queueIsEmpty: queueIsEmpty,
  queuePop: fifoQueuePop,
  queueInsert: queueInsert,
}

/**
 * binary max heap array
 * @param {function(element:object, aboveElement:object):boolean} isAbove order function for priority queue
 * @reutn {object} will return an object similar to lifo/fifoQueue
 */
module.exports.priorityQueue = function (isAbove)
{
  return {
    queueIsEmpty: queueIsEmpty,
    queuePop: priorityQueuePop(isAbove),
    queueInsert: priorityQueueInsert(isAbove),
  };
}
