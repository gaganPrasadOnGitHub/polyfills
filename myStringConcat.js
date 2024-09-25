// String concat
String.prototype.myStringConcat = function (...args) {
  let result = this;

  for (let i = 0; i < args.length; i++) {
    result += String(args[i]);
  }

  return result;
};
