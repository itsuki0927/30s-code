# intersectionBy

将提供的函数应用于两个数组的每个数组元素后，返回两个数组中存在的元素。

## 技巧

- 通过将 `fn` 应用于 `b` 中的所有元素来创建一个集合。
- 在 `a` 上使用`Array.prototype.filter()`过滤出指定在指定`s`集合中的元素。

## code

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return [...new Set(a)].filter(x => s.has(fn(x)));
};
```

## 示例

```js
console.log(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // [2.1]
console.log(
  intersectionBy(
    [{ title: 'Apple' }, { title: 'Orange' }],
    [{ title: 'Orange' }, { title: 'Melon' }],
    x => x.title,
  ),
); // [{ title: 'Orange' }]
```
