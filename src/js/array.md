# 数组

---

## 构造函数

- Array()
  - 参数长度为0或长度大于等于2时，传入的参数将按照顺序依次成为新数组的第0至N项（参数长度为0时，返回空数组）
  - 参数长度为1时，当len不是数值时，处理同上，返回一个只包含len元素一项的数组；当len为数值时，根据如下规范，len最大不能超过32位无符号整型，即需要小于2的32次方（len最大为Math.pow(2,32) -1或-1>>>0），否则将抛出RangeError。
- Array.of()

```javascript
Array.of(8.0); // [8]
Array(8.0); // [undefined × 8]
```

- Array.from()
  - Array.from拥有3个形参，第一个为类似数组的对象，必选。第二个为加工函数，新生成的数组会经过该函数的加工再返回。第三个为this作用域，表示加工函数执行时this的值。后两个参数都是可选的

## 判断数组方法

```javascript
var a = [];
// 1.基于instanceof
a instanceof Array;
// 2.基于constructor
a.constructor === Array;
// 3.基于Object.prototype.isPrototypeOf
Array.prototype.isPrototypeOf(a);
// 4.基于getPrototypeOf
Object.getPrototypeOf(a) === Array.prototype;
// 5.基于Object.prototype.toString
Object.prototype.toString.apply(a) === '[object Array]';
```

- 只有最后一种和 Array.isArray() 准确

## 变异方法

- push
- pop
- shift
- unshift
- splice
- sort
- reverse
- copyWithin
- fill

---

## 非变异方法

- includes
- concat
- join
- slice
- toString
- toLocateString
- indexOf
- lastIndexOf

## 遍历方法

- forEach
- every
- some
- filter
- map
- reduce
- reduceRight
- entries
- find
- findIndex
- keys
- values
