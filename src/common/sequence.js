"use strict";

/**
 * @typedef {Array} Sequence
 * 
 */

/**
 * Tests if sequence is empty.
 * 
 * @param {Sequence} sequence
 * @return {boolean}
 */
module.exports.sequenceIsEmpty = function (sequence)
{
  return !sequence || !sequence.length;
}

/**
 * Returns first element of non-empty sequence
 * 
 * @param {Sequence} sequence
 * @return {Action}
 */
module.exports.sequenceFirst = function (sequence)
{
  return sequence[0];
}

/**
 * Returns sequence containing non-first element
 * 
 * @param {Sequence} sequence
 * @return {Action}
 */
module.exports.sequenceRest = function (sequence)
{
  if (sequence && sequence.length > 0)
  {
    return sequence.slice(1);
  }
  else
  {
    return null;
  }
}
