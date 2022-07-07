const objCreate = function (Fn) {
  const obj = {}
  obj.__proto__ = Fn;
  return obj;
}

const obj_create = function (Fn) {
  const F = function () {}
  F.prototype = Fn;
  return new F();
}