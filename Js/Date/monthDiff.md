# monthDiff

计算两个日期相差多少个月。

## 技巧

- 使用`Date.prototype.getFullYear()`、`Date.prototype.getMonth()`获取日期的年/月, 然后计算差值。
- 使用`Math.max()`取`0`和差值的最大值。

## code

```js
const monthDiff = (startDate, endDate) =>
  Math.max(
    0,
    (endDate.getFullYear() - startDate.getFullYear()) * 12 -
      startDate.getMonth() +
      endDate.getMonth()
  );
```

```ts
const monthDiff = (startDate: Date, endDate: Date) =>
  Math.max(
    0,
    (endDate.getFullYear() - startDate.getFullYear()) * 12 -
      startDate.getMonth() +
      endDate.getMonth()
  );
```

## 示例

```js
console.log(monthDiff(new Date('2020-10-22'), new Date('2021-12-22'))); // 14
```
