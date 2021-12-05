# sortedLastIndexBy

根据提供的迭代器函数，查找值插入数组以保持其排序顺序的最高索引。

## 技巧

- 检查数组是否是降序排序.
- 使用`Array.prototype.map()`将迭代器函数应用于数组的所有元素。
- 根据提供的迭代器函数，使用`Array.prototype.reverse()`和`Array.prototype.findIndex()`查找应该插入元素的最后一个索引。

## code

```js
const sortedLastIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr
    .map(fn)
    .reverse()
    .findIndex(el => (isDescending ? val <= el : val >= el));
  return index === -1 ? 0 : arr.length - index;
};
```

## 示例

```js
console.log(
  sortedLastIndexBy([{ x: 0 }, { x: 1 }, { x: 3 }, { x: 4 }, { x: 5 }], { x: 4 }, o => o.x),
);
// 4
```
