// Shift
Array.prototype.myShift = function () {
  if (!Array.isArray(this)) {
    throw new TypeError('Cannot read property on incompatible receiver');
  }
  if (this.length === 0) {
    return undefined;
  }
  const firstElement = this[0];

  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }
  this.length--;

  return firstElement;
};
