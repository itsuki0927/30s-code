# compactObject

深度删除一个对象或数组中的所有 falsy 值。

## 技巧

- 使用递归。
- 使用`Array.isArray()`和`Array.prototype.filter()` 初始化数组。
- 使用`Object.keys()`和`Array.prototype.reduce()`来迭代每个带有初始值的键。
- 只有 truthy 值才能添加到最终的对象中。
- 如果`typeof value`是一个对象的话, 使用递归进行深度删除。

## code

```js
const compactObject = val => {
  const data = Array.isArray(val) ? val.filter(Boolean) : val;

  return Object.keys(data).reduce(
    (acc, key) => {
      const value = data[key];
      if (Boolean(data[key])) {
        acc[key] = typeof value === 'object' ? compactObject(value) : data[key];
      }
      return acc;
    },
    Array.isArray(val) ? [] : {}
  );
};
```

## 示例

```js
const obj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: '',
  g: 'a',
  h: [null, false, '', true, 1, 'a'],
  i: { j: 0, k: false, l: 'a' },
};
console.log(compactObject(obj));
// { c: true, e: 1, g: 'a', h: [ true, 1, 'a' ], i: { l: 'a' } }
```
