# unzipWith

数组的每一列作为参数执行 fn 函数, 最后每一列的执行结果由一个数组返回

## 技巧

- 使用`Math.max`、`Array.prototype.map`、`...`找出二维数组中最长的子数组
- 使用`Array.from` 创建一个最长子数组长度的二维数组
- 使用`Array.prototype.reduce`和`Array.prototype.forEach`将每一列的值添加到对应的子数组中
- 使用`()`和`,`运算符使其正确的返回`acc`
- 使用`Array.prototype.map`和`...`将对每一个子数组执行`fn`函数

## code

```js
const unzipWith = (arr, fn) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({ length: Math.max(...arr.map(v => v.length)) }, () => []),
    )
    .map(args => fn(...args));
```

## 示例

```js
const arr = unzipWith(
  [
    [1, 10, 100],
    [2, 20, 200],
    [3, 30, 300],
  ],
  (...args) => args.reduce((acc, v) => acc + v, 0),
);
console.log(arr);
// [6, 60, 600]
```
