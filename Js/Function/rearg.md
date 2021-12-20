# rearg

创建一个函数，该函数调用提供的函数，其参数根据指定的索引排列。

## 技巧

- 使用`Array.prototype.map()`根据`indexes`进行排序。
- 使用扩展运算符`...`将数组展开为`fn`参数。

## code

```js
const rearg =
  (fn, indexes) =>
  (...args) =>
    fn(...indexes.map(i => args[i]));
```

## 示例

```js
const rearged = rearg(
  function (a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1],
);
console.log(rearged('b', 'c', 'a')); // ['a', 'b', 'c']
```
