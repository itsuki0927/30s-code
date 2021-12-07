# averageBy

求平均值。

## 技巧

- 使用`Array.prototype.map()`对每一个元素映射到`fn`返回的值。
- 使用`Array.prototype.reduce()`进行求和, 初始值为 0。
- 将结果除以数组长度就是平均值。

## code

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
```

## 示例

```js
console.log(averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n)); // 5
console.log(averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n')); // 5
```
