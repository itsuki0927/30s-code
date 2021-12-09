# partitionBy

将 `fn` 应用于 `arr` 中的每个值，每次提供的函数返回新值时都会拆分它。

## 技巧

- 将`Array.prototype.reduce()`与一个累加器对象一起使用，该对象将保存结果数组和从 `fn` 返回的最后一个值。
- 使用`Array.prototype.push()`将 `arr` 中的每个值添加到累加器数组中的相应分区。

## code

```js
const partitionBy = (arr, fn) =>
  arr.reduce(
    ({ res, last }, v, i, a) => {
      const next = fn(v, i, a);
      if (next !== last) res.push([v]);
      else res[res.length - 1].push(v);
      return { res, last: next };
    },
    { res: [] },
  ).res;
```

## 示例

```js
const numbers = [1, 1, 3, 3, 4, 5, 5, 5];
console.log(partitionBy(numbers, n => n % 2 === 0)); // [[1, 1, 3, 3], [4], [5, 5, 5]]
console.log(partitionBy(numbers, n => n)); // [[1, 1], [3, 3], [4], [5, 5, 5]]
```
