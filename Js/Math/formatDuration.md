# formatDuration

返回给定毫秒数的可读格式。

## 技巧

- 将 ms 除以适当的值, 以获得日期、小时、分钟、秒和毫秒的适当值。
- 使用`Object.entries()`和`Array.prototype.filter()`来保留非零值。
- 使用`Array.prototype.map()`为每个值创建字符串, 并以适当的复数形式呈现。
- 使用`String.prototype.join(', ')`将数组转化为字符串

## code

```js
const formatDuration = ms => {
  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000,
  };
  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
    .join(', ');
};
```

## 示例

```js
console.log(formatDuration(1001)); // '1 second, 1 millisecond'
console.log(formatDuration(34325055574));
// '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'
```
