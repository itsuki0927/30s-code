# frequencies

统计每一个元素的出现频率。

## 技巧

- 使用`Array.prototype.reduce()` 将每一个值进行统计。

## code

```js
const frequencies = arr =>
  arr.reduce((acc, k) => {
    acc[k] = (acc[k] || 0) + 1;
    return acc;
  }, {});
```

## 示例

```js
console.log(frequencies(['a', 'b', 'a', 'c', 'a', 'a', 'b']));
// { a: 4, b: 2, c: 1 }
console.log(frequencies([...'ball']));
// { b: 1, a: 1, l: 2 }
```
