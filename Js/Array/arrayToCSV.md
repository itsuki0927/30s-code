# arrayToCSV

将二维数组转换为 CSV 字符串。

## 技巧

- 使用`Array.prototype.map()`和`Array.prototype.join(delimiter)` 合并一维的字符串。
- 使用`Array.prototype.join('\n')` 将所有行合并到一个字符串, 每行使用`\n`进行分割。
- 省略第二个参数`delimiter`, 默认值为`,`。

## code

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr
    .map(v => v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter))
    .join('\n');
```

## 示例

```js
console.log(
  arrayToCSV([
    ['a', 'b'],
    ['c', 'd'],
  ]),
);
// '"a","b"\n"c","d"'

console.log(
  arrayToCSV(
    [
      ['a', 'b'],
      ['c', 'd'],
    ],
    ';',
  ),
);
// '"a";"b"\n"c";"d"'

console.log(
  arrayToCSV([
    ['a', '"b" great'],
    ['c', 3.1415],
  ]),
);
// '"a","""b"" great"\n"c",3.1415'
```
