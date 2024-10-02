Function.prototype.myBind = function (context, ...args) {
  context = context || window;

  const myFunction = this;
  return function (...args2) {
    myFunction.apply(context, [...args, ...args2]);
  };
};
