// 实现js 的filter
Array.prototype.filter = function (callback, thisArg) {
  if (this == undefined) {
    throw new TypeError('this is null or not undefined;')
  }

  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function')
  }

  const res = [];
  // 让O成为回调函数的对象传递（强制转换对象)
  const O = Object(this)
  // >>>0 保证length为number，且为正整数
  const length = O.length >>> 0;

  for(let i = 0; i < length; i+=1) {
    // 检查i是否在O的属性，（会检查原型链)
    if(i in O) {
      // 回调函数调用传参
      if(callback.call(thisArg, O[i], i, O)) {
        res.push(O[i])
      }
    }
  }
  return res;
}

Array.prototype.map = function (callback, thisArg) {
  if (this == undefined) {
    throw new TypeError('this is null or not defined')
  }

  if (typeof callback !== 'function')
  {
    throw new TypeError(callback + ' is not a function')
  }

  const res = [];
  const O = Object(this)
  const length = O.length >>> 0;

  for (let i = 0; i < length; i+=1)
  {
    if (i in O) {
      res[i] = callback.call(thisArg, O[i], i, this)
    }
  }

  return res;
}

Array.prototype.reduce = function (callback, initialValue) {
  if (this == undefined) {
    throw new TypeError('this is null or not defined')
  }

  if (typeof callback !== 'function')
  {
    throw new TypeError(callback + ' is not a function')
  }
  
  const O = Object(this)
  const length = O.length >>> 0
  let accumulator = initialValue
  let k = 0;

  if (accumulator === undefined) {
    while(k<length && !(k in O)) {
      k++
    }
    if(k >= length) {
      throw new TypeError('Reduce of empty array with no initial value')
    }
    accumulator = O[k++]
  }

  while (k < length) {
    if (k in O) {
      accumulator = callback.call(undefined, accumulator, O[k], k, O)
    }
    k++
  }

  return accumulator;
}