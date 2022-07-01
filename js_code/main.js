/*
 * @Description: main
 * @Author: Moobye
 * @Date: 2022-06-29 18:00:38
 * @LastEditTime: 2022-07-01 13:22:45
 * @LastEditors: Moobye
 */
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