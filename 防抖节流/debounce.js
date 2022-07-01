/*
 * @Description: debounce
 * @Author: Moobye
 * @Date: 2021-09-19 13:55:42
 * @LastEditTime: 2021-09-20 10:32:13
 * @LastEditors: Moobye
 */

// es5版
function es5Debounce(fn, delay) {
  let timer
  return function() {
    const context = this;
    const args = arguments;
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}
// es6版本
function es6Debounce(fn, delay) {
  let timer
  return function(...args) {
    if (timer) clearTimeout(timer)
    // 使用箭头函数来处理this问题
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}

// 有时希望立刻执行函数，然后等到停止触发 n 秒后，才可以重新触发执行。
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(function () {
        timeout = null;
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait);
    }
  }
}

function debounce(fn, delay, immediate) {
  let timer
  let result
  return function(...args) {
    if (timer) clearTimeout(timer)

    if (immediate) {
      // 如果timer存在，说明第二次调用的时候还没到delay时间，因为如果超过delay时间
      // timer会被赋值为null，所以这个时候我们不应该执行fn，应该重新设置一个定时器
      // 但如果是一次的时候，因为还没有设过定时器，所以这里timer会是undefined
      if (timer) {
        timer = setTimeout(() => timer = null, delay)
      } else {
        result = fn.apply(this, args)
        return result
      }
    } else {
      timer = setTimeout(() => fn.apply(this, args), delay)
    }
  }
}


function onclick () {
  console.log('object :>> ');
}

debounce(onclick, 100)