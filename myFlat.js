// Flat
Array.prototype.myFlat = function (depth = 1) {
  if (!Array.isArray(this)) {
    throw new TypeError('Cannot read property on incompatible receiver');
  }

  const flattener = function (arr, depth) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      if (Array.isArray(current) && depth > 0) {
        result = result.concat(flattener(current, depth - 1));
      } else {
        result[i] = arr[i];
      }
    }
    return result;
  };

  return flattener(this, depth);
};
