# bifurcate

根据过滤数组分为两组。

## 技巧

- 使用`Array.prototype.reduce()`和`Array.prototype.push()`进行分组。
- 如果`filter`数组返回的是 truthy 值放在第一组, 否则放在第二组。

## code

````js
const bifurcate = (arr, filter) =>
  arr.reduce(
    (acc, val, i) => {
      acc[filter[i] ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
```

## 示例

```js
console.log(bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]));
// [ ['beep', 'boop', 'bar'], ['foo'] ]
````
