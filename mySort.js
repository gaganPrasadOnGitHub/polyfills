// Sort
Array.prototype.mySort = function (compareFunction) {
  if (!Array.isArray(this)) {
    throw new TypeError('Cannot read property on incompatible receiver');
  }

  if (typeof compareFunction !== 'function') {
    compareFunction = function (a, b) {
      return String(a) > String(b) ? 1 : -1;
    };
  }

  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - i - 1; j++) {
      if (compareFunction(this[j], this[j + 1]) > 0) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }

  return this;
};
