Function.prototype.myApply = function (context, argsArray = []) {
  context = context || window;
  context.myFunction = this;

  const result = context.myFunction(...argsArray);
  return result;
};
