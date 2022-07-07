/*
 * @Description: 实现instanceof
 * @Author: Moobye
 * @Date: 2022-07-07 17:13:52
 * @LastEditTime: 2022-07-07 17:15:42
 * @LastEditors: Moobye
 */
function myInstanceof (leftObj, rightObj) {
    // return leftObj instanceof rightObj;
    return leftObj.__proto__ === rightObj.prototype;
}

