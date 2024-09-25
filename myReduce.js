// Reduce
Array.prototype.myReduce = function (callbackFunction, initialValue) {
  if (!Array.isArray(this)) {
    throw new TypeError('Cannot read property on incompatible receiver');
  }

  if (typeof callbackFunction !== 'function') {
    throw new TypeError('Call back must be a function');
  }

  if (this.length === 0) {
    throw new TypeError('Array is empty');
  }

  let accumulator;
  let startIndex;
  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    accumulator = this[0];
    startIndex = 1;
  }

  for (i = startIndex; i < this.length; i++) {
    accumulator = callbackFunction.call(undefined, accumulator, this[i], i, this);
  }

  return accumulator;
};
