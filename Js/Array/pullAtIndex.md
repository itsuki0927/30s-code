# pullAtIndex

改变原始数组, 过滤指定下标的值。

## 技巧

- 使用`Array.prototype.filter()`和`Array.prototype.includes()`提取不需要的值。
- 使用`arr.length = 0`清空原始数组。
- 使用`Array.prototype.forEach()`和`Array.prototype.push()`填充原始数组。

## code

```js
const pullAtIndex = (arr, pullArr) => {
  const removed = [];
  const pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return removed;
};
```

## 示例

```js
const myArray = ['a', 'b', 'c', 'd'];
const pulled = pullAtIndex(myArray, [1, 3]);
console.log(myArray);
// myArray = [ 'a', 'c' ]
console.log(pulled);
// pulled = [ 'b', 'd' ]
```
