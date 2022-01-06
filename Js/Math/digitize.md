# digitize

将数字转换为数字数组，必要时删除其符号。

## 技巧

- 使用`Math.abs()`获取数字的绝对值。
- 使用模版字符串与`...`转换为字符数组。
- 使用`Array.prototype.map()`和`parseInt()`将每一项转化为整数。

## code

```js
const digitize = (n) => [...`${Math.abs(n)}`].map((v) => parseInt(v));
```

## 示例

```js
console.log(digitize(123)); // [1, 2, 3]
console.log(digitize(-123)); // [1, 2, 3]
```
