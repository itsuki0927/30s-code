# toPairs

获取对象/可迭代值的键值对二维数组。

## 技巧

- 如果`Symbol.iterator`和`obj.entries`都存在且都是函数类型。使用`entries()`获取键值对。
- 使用`Array.from()`将键值对转化为二维数组。
- 如果`Symbol.iterator`未定义则使用`Object.entries()` 。

## code

```js
const toPairs = obj =>
  obj[Symbol.iterator] instanceof Function && obj.entries instanceof Function
    ? Array.from(obj.entries())
    : Object.entries(obj);
```

## 示例

```js
console.log(toPairs({ a: 1, b: 2 })); // [['a', 1], ['b', 2]]
console.log(toPairs([2, 4, 8])); // [[0, 2], [1, 4], [2, 8]]
console.log(toPairs('shy')); // [['0', 's'], ['1', 'h'], ['2', 'y']]
console.log(toPairs(new Set(['a', 'b', 'c', 'a']))); // [['a', 'a'], ['b', 'b'], ['c', 'c']]
```
