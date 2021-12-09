# differenceBy

将提供的函数应用于两者的每个数组元素，返回两个数组之间的差异。

## 技巧

- 通过将 `fn` 应用于 `b` 中的每个元素来创建一个集合。
- 使用 `Array.prototype.map()`将 `fn` 应用于 `a` 中的每个元素。
- 使用`Array.prototype.filter()`和 `fn` 在 `a` 上组合使用，只保留 `b` 中不包含的值，使用 `Set.prototype.has()`。

## code

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.map(fn).filter(el => !s.has(el));
};
```

## 示例

```js
console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // [1]
console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x)); // [2]
```
