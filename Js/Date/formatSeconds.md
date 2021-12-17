# formatSeconds

返回给定秒数的 ISO 格式。

## 技巧

- 将 s 除以适当的值, 以获得小时、分钟和秒。
- 将 sign 存储在变量中, 作为结果字符串的前缀。
- 使用 `Array.prototype.map()`格式化每一段字符串。
- 使用`Math.floor()`和 `String.prototype.padStart()` 补充前置零。
- 使用`String.prototype.join(':')`将数组合并成字符串。

## code

```js
const formatSeconds = s => {
  const [sign, ...rest] =
    s > 0 ? ['', s / 3600, (s / 60) % 60, s % 60] : ['-', -s / 3600, (-s / 60) % 60, -s % 60];

  return sign + rest.map(v => `${Math.floor(v)}`.padStart(2, '0')).join(':');
};
```

## 示例

```js
console.log(formatSeconds(200)); // '00:03:20'
console.log(formatSeconds(-200)); // '-00:03:20'
console.log(formatSeconds(99999)); // '27:46:39'
```
