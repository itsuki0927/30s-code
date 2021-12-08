# merge

从两个或多个对象的组合创建一个新对象。

## 技巧

- 使用`...`将多个对象聚集到一个数组。
- 使用`Array.prototype.reduce()`和`Object.prototype.keys()`遍历每一个对象以及 key。
- 使用`Object.prototype.hasOwnProperty()`和`Object.prototype.keys()` 为多个对象中存在的键追加值。

## code

```js
const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
        return acc;
      }, {}),
    {},
  );
```

## 示例

```js
const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo',
};
console.log(merge(object, other));
// { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
```
