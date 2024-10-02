Function.prototype.myCall = function (context, ...args) {
  context = context || window;
  context.myFunction = this;

  const result = context.myFunction(...args);
  return result;
};
