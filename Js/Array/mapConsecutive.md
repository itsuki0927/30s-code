# mapConsecutive

使用给定函数 fn 映射 n 个连续元素的每个块。

## 技巧

- 使用`Array.prototype.slice()` 移除左边 n 个元素的数组。
- 使用`Array.prototype.map()` 和`Array.prototype.slice()`将 `fn` 应用于 `arr` 中 `n` 个连续元素的每个块。

## code

```js
const mapConsecutive = (arr, n, fn) =>
  arr.slice(n - 1).map((v, i) => fn(arr.slice(i, i + n)));
```

## 示例

```js
console.log(
  mapConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, (x) => x.join('-'))
);
// ['1-2-3', '2-3-4', '3-4-5', '4-5-6', '5-6-7', '6-7-8', '7-8-9', '8-9-10'];
```
