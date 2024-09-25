// Filter
Array.prototype.myFilter = function (callbackFunction, thisArg) {
  if (!Array.isArray(this)) {
    throw new TypeError('Cannot read property on incompatible receiver');
  }
  if (typeof callbackFunction !== 'function') {
    throw new TypeError('Callback must be a function');
  }

  let filteredIndex = 0;
  const filteredArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callbackFunction.call(thisArg, this[i], i, this)) {
      filteredArray[filteredIndex] = this[i];
      filteredIndex++;
    }
  }

  return filteredArray;
};
