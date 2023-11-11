# 面经——三座大山

> 更新前端三座大山系列

## 作用域

#### 1.基本概念

作用域：控制着变量和函数的可见性和生命周期。最大的作用是隔离变量，不同作用域下同名变量不会冲突。

执行上下文：执行上下文是评估和执行 JavaScript 代码的环境的抽象概念。每当 Javascript 代码在运行的时候，它都是在执行上下文中运行。（由于本篇主要讲作用域，关于执行上下文只要知道两者不是一个东西就行）

三种作用域：

1.全局作用域：全局作用域是指在全局范围内声明的变量和函数，它们可以在代码的任何位置被访问。（在浏览器中全局作用域被认为是 window 对象）

2.函数作用域：局部作用域是指声明在函数内部的变量和函数，在函数执行时只能在函数内部被访问。（函数调用时创建，函数执行结束后就销毁）

3.块级作用域（ES6）：块语句也会创建一个新的作用域， 块级作用域可通过新增命令 let 和 const 声明，所声明的变量在指定块的作用域外无法被访问。

作用域链：指如果在当前作用域中没有查到值，就会向上级作用域查询，直到全局作用域，这样一个查找过程所形成的链条就被称之为作用域链。

#### 2.示例

```
const a = 1
function fun(){
  const b = 2;
  {
    const c = 3
    console.log(a, b)
  }
  console.log(a, b)
  // console.log(c)
  // console.log(d)
}
{
  const d = 4
}
fun()
console.log(a)
console.log(b,c,d)
```

变量 a 所在的就是全局作用域；可以访问 a，但不能访问 b,c,d

变量 b 所在的就是函数作用域；可以访问 a,b；但不能访问 c,d

变量 c 所在的就是块作用域；
这里能访问到全局作用域的 a，函数作用域的 b。（作用域链的作用）
自己块级作用域的 c；不能访问 d

## 原型与原型链

#### 1.基本概念

JavaScript 中对象可以分为普通对象和函数对象。

对象拥有 `__proto__` 和 `constructor`两个实例属性

函数也是对象，所以它也有`__proto__` 和 `constructor`两个实例属性，除此之外它还有个`prototype`属性指向一个远行对象

属性定义：

`__proto__`：对象的该属性指向对象的原型对象

`constructor`：对象的该属性指向对象的构造函数

`prototype`：函数的该属性指向函数的远行对象，（该函数以构造函数的形式创建一个实例对象、该实例对象的原型对象就是该函数的 prototype 属性指向的对象）[是不是有点 😵]

原型链：寻找一个对象的属性，如果对象自身没有该属性，会沿着`__proto__`属性连接的原型链上继续找，直到找到或者`__proto__`指向 null 为止。

#### 2.示例

```
function Person(){}
const per = new Person()

console.log(per.__proto__); //{constructor: ƒ}
console.log(per.constructor); //ƒ Person(){}
console.log(Object.getPrototypeOf(per)); //{constructor: ƒ}

console.log(Person.__proto__); //ƒ () { [native code] }
console.log(Person.constructor); //ƒ Function() { [native code] }
console.log(Person.prototype); //{constructor: ƒ}

console.log(Person.prototype === per.__proto__); //true
console.log(Person === per.constructor); //true
```

其实还有一张经典的图，但是一下子我没有找到。可以自己查一下；

#### 3.知识点补充

1.new 关键字

定义：**`new`  运算符**创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

new 关键字是用在构造函数创建对象实例的时候的使用的
，具体可以看我那篇手写 new

2.原型相关方法

不建议使用`__proto__`去获取对象的原型对象，建议使用`Object.getPrototypeOf(per)`去获取 per 对象的原型对象

3.继承

原型与原型链的作用之一就是实现 JavaScript 的继承；比较熟悉的原型链继承、借用构造函数继承、原型式继承等等都有原型相关的知识。

4.显示原型继承
主要有两种方法：

- Object.setPrototypeOf(obj,protoObj)
- Object.create(protoObj)

一个是指定 obj 的原型是 protoObj；另一个是创建一个新对象，该新对象以 protoObj 为原型
