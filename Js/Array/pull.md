# pull

改变原始数组, 过滤指定的值。

## 技巧

- 使用`Array.prototype.filter()`和`Array.prototype.includes()`提取不需要的值。
- 使用`arr.length = 0`清空原始数组。
- 使用`Array.prototype.forEach()`和`Array.prototype.push()`填充原始数组。

## code

```js
const pull = (arr, ...args) => {
  const argsState = Array.isArray(args[0]) ? args[0] : args;
  const pulled = arr.filter(v => !args.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};
```

## 示例

```js
const myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(myArray, 'a', 'c');
console.log(myArray); // myArray = [ 'b', 'b' ]
```
