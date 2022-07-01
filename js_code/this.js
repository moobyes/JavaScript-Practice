let obj1 = {name: 'tom'};
let obj2 = {name: 'jack'};

function Child(name){
  this.name = name;
}

Child.prototype = {
  constructor: Child,
  showName: function(){
    console.log(this.name);
  }
}
var myChild = new Child('thomas');
myChild.showName(); 
//  call,apply,bind使用
myChild.showName.call(obj1); 
myChild.showName.apply(obj2);
let bind = myChild.showName.bind(obj1); // 返回一个函数
bind(); 


Function.prototype.apply = function(context = window, args) {
  if (typeof this !== 'function')
  {
    throw new TypeError('Type Error')
  }

  const fn = Symbol() // 拿到fn的唯一值
  context[fn] = this; // 改变上下文环境
 
  const res = context[fn](...args) // 执行函数
  delete context[fn]
  return res;
}

Function.prototype.myCall = function (context) {
  var context = context || Window;
  context.fn = this;

  var args = []
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']')
  }

  var result = eval('context.fn(' + args + ')')
  delete context.fn
  return result;
}

var value = 2;
var obj = {
  value: 1
}
function bar(name, age) {
  console.log(this.value)
  return {
    value: this.value,
    name: name,
    age: age
  }
}

bar.myCall(null)
console.log(bar.myCall(obj, 'kevin', 18))