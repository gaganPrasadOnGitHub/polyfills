// unshift
Array.prototype.myUnshift = function (...values) {
  if (!Array.isArray(this)) {
    throw new TypeError('Cannot read property on incompatible receiver');
  }

  originalLength = this.length;
  elementsLength = values.length;

  for (let i = originalLength - 1; i >= 0; i--) {
    this[i + elementsLength] = this[i];
  }
  for (let i = 0; i < elementsLength; i++) {
    this[i] = values[i];
  }

  return this.length;
};
