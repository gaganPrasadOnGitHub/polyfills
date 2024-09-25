// Reverse
Array.prototype.myReverse = function () {
  if (!Array.isArray(this)) {
    throw new TypeError('Cannot read property on incompatible receiver');
  }

  let start = 0;
  let end = this.length - 1;

  while (start < end) {
    const temp = this[start];
    this[start] = this[end];
    this[end] = temp;

    start++;
    end--;
  }

  return this;
};
