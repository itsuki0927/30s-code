# sumBy

使用提供的函数将每个元素映射到值后，计算数组的和。

## 技巧

- 使用`Array.prototype.map()`将每个元素映射到 `fn` 返回的值。
- 使用`Array.prototype.reduce()`将每个值添加到累加器中，并用值 `0` 初始化。

## code

```js
const sumBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0);
```

## 示例

```js
console.log(sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], x => x.n)); // 20
console.log(sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n')); // 20
```
