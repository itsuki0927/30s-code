# takeRightWhile

从数组的末端删除元素，直到提供的函数返回`false`。返回删除的元素。

## 技巧

- 使用`[...arr]`拷贝一个新数组。
- 使用`Array.prototype.reverse()`和`Object.prototype.entries` 返回一个数组并返回`[index, val]`的二维数组。
- 使用`for of`迭代这个二维数组。
- 使用`Array.prototype.slice()` 返回删除的元素。
- 如果满足`!fn(val)`则返回 `slice` 后的数组。

## code

```js
const takeRightWhile = (arr, fn) => {
  for (const [i, val] of [...arr].reverse().entries()) {
    if (!fn(val)) return i === 0 ? [] : arr.slice(-i);
  }
  return arr;
};
```

## 示例

```js
console.log(takeRightWhile([1, 2, 3, 4], n => n >= 3));
// [3, 4]
```
