// Push
Array.prototype.myPush = function (...values) {
  if (!Array.isArray(this)) {
    throw new TypeError('Cannot read property on incompatible receiver');
  }

  let arrayLength = this.length;
  const elementsLength = values.length;

  for (let i = 0; i < elementsLength; i++) {
    this[arrayLength] = values[i];
    arrayLength++;
  }

  return arrayLength;
};
