# converge

接受收敛函数和分支函数列表，并返回将每个分支函数应用于参数的函数，分支函数的结果作为参数传递给收敛函数。

## 技巧

- 使用`Array.prototype.map()`和`Function.prototype.apply()`将每个函数应用于给定参数。
- 使用扩展运算符`…`将其他函数的结果作为参数调用 `converger`。

## code

```js
const converge =
  (converger, fns) =>
  (...args) =>
    converger(...fns.map(fn => fn.apply(null, args)));
```

## 示例

```js
const average = converge(
  (a, b) => a / b,
  [arr => arr.reduce((a, v) => a + v, 0), arr => arr.length]
);
console.log(average([1, 2, 3, 4, 5, 6, 7])); // 4
```
