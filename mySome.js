// Some
Array.prototype.mySome = function (callbackFunction, thisArg) {
  if (!Array.isArray(this)) {
    throw new TypeError('Cannot read property on incompatible receiver');
  }

  if (typeof callbackFunction !== 'function') {
    throw new TypeError('callback must be a function');
  }

  for (let i = 0; i < this.length; i++) {
    if (callbackFunction.call(thisArg, this[i], i, this)) {
      return true;
    }
  }
  return false;
};
