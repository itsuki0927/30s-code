# symmetricDifferenceBy

找出两个数组的对称差值。

## 技巧

- 使用`new Set` 来进行去除。
- 使用`Array.prototype.map()` 来对两个数组的每一项执行`fn`函数。
- 使用`Array.prototype.filter()`和`Set.prototype.has()`来找出数组差值。

## code

```js
const symmetricDifferenceBy = (a, b, fn) => {
  const sA = new Set(a.map(v => fn(v)));
  const sB = new Set(b.map(v => fn(v)));

  return [...a.filter(v => !sB.has(fn(v))), ...b.filter(v => !sA.has(fn(v)))];
};
```

## 示例

```js
symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [ 1.2, 3.4 ]
symmetricDifferenceBy(
  [{ id: 1 }, { id: 2 }, { id: 3 }],
  [{ id: 1 }, { id: 2 }, { id: 4 }],
  i => i.id,
);
// [{ id: 3 }, { id: 4 }]
```
