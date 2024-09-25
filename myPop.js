// Pop
Array.prototype.myPop = function () {
  if (!Array.isArray(this)) {
    throw new TypeError('Cannot read property on incompatible receiver');
  }
  if (this.length === 0) {
    return undefined;
  }
  const lastElement = this[this.length - 1];

  this.length--;

  return lastElement;
};
