// Slice
Array.prototype.mySlice = function (start, end) {
  if (!Array.isArray(this)) {
    throw new TypeError('Cannot read property on incompatible receiver');
  }
  const slicedArray = [];
  const arrayLength = this.length;

  if (start < 0) {
    start = Math.max(arrayLength + start, 0);
  }
  if (end === undefined) {
    end = arrayLength;
  }
  if (end < 0) {
    end = Math.max(arrayLength + end, 0);
  }

  for (let i = start; i < end && i < arrayLength; i++) {
    slicedArray[i] = this[i];
  }

  return slicedArray;
};
