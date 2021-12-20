# cartesianProduct

计算两个数组的笛卡尔乘积。

## 技巧

- 使用`Array.prototype.reduce()`, `Array.prototype.map()`和扩展运算符`...`, 以生成两个数组的所有可能的元素对。

## code

```js
const cartesianProduct = (a, b) => a.reduce((p, x) => [...p, ...b.map(y => [x, y])], []);
```

## 示例

```js
console.log(cartesianProduct(['x', 'y'], [1, 2]));
// [['x', 1], ['x', 2], ['y', 1], ['y', 2]]
```
