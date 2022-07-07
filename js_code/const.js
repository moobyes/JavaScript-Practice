/*
 * @Description: 手动实现const
 * @Author: Moobye
 * @Date: 2022-07-07 16:31:16
 * @LastEditTime: 2022-07-07 16:35:31
 * @LastEditors: Moobye
 */
var __const = function __const(data, value) {
  window.data = value; // 将值挂载到window上
  Object.defineProperty(window, data, { // 利用Object.defineProperty的能力劫持当前对象，并修改其属性描述符
    enumerable: false, // 不可枚举
    configurable: false,
    get: function() {
      return value;
    },
    set: function (data) {
      if (data !== value) { // 如果值不一样就抛出错误, 当要对当前属性进行赋值时，则抛出错误！
        throw new TypeError('Assignment to constant variable.')
      } else {
        return value;
      }
    }
  })
}