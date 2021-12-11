# reduceSuccessive

将函数与累加器和数组中的每个元素（从左到右从左到右应用，返回连续减少值的数组。

## 技巧

- 使用`Array.prototype.reduce()`将给定函数应用于给定数组，存储每个新结果。
- 使用`Array.prototype.slice(-1)`复制最后一个元素数组。

## code

```js
const reduceSuccessive = (arr, fn, acc) =>
  arr.reduce((res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res), [acc]);
```

## 示例

```js
console.log(reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0));
// [0, 1, 3, 6, 10, 15, 21]
```
