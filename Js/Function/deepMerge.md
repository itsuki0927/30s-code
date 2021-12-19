# deepMerge

使用一个函数处理两个对象中存在的键，深度合并两个对象。

## 技巧

- 使用`Object.keys()`获取两个对象的 keys，使用 Set 进行去重，并使用`...`创建一个数组。
- 使用`Array.prototype.reduce()`将每个唯一键添加到对象，使用 `fn` 组合两个给定对象的值。

## code

```js
const deepMerge = (a, b, fn) =>
  [...new Set([...Object.keys(a), ...Object.keys(b)])].reduce(
    (acc, key) => ({ ...acc, [key]: fn(key, a[key], b[key]) }),
    {},
  );
```

## 示例

```js
deepMerge({ a: true, b: { c: [1, 2, 3] } }, { a: false, b: { d: [1, 2, 3] } }, (key, a, b) =>
  key === 'a' ? a && b : Object.assign({}, a, b),
);
// { a: false, b: { c: [ 1, 2, 3 ], d: [ 1, 2, 3 ] } }
```
