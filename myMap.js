// Map
Array.prototype.myMap = function (callbackFunction, thisArg) {
  if (!Array.isArray(this)) {
    throw new TypeError('Cannot read property on incompatible receiver');
  }
  if (typeof callbackFunction !== 'function') {
    throw new TypeError('Callback must be a function');
  }

  const mappedArray = [];

  for (let i = 0; i < this.length; i++) {
    mappedArray[i] = callbackFunction.call(thisArg, this[i], i, this);
  }

  return mappedArray;
};
