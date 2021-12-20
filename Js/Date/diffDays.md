# diffDays

计算两个日期相差多少天。

## 技巧

- 使用`Math.abs()`计算绝对两个日期时间戳差值, 然后除以一天的时间戳。
- 使用`Math.ceil()`将结果进行向上取整。

## code

```js
const diffDays = (startDate, endDate) =>
  Math.ceil(Math.abs(startDate - endDate) / (1000 * 60 * 60 * 24));
```

```ts
const diffDays = (startDate: Date, endDate: Date) =>
  Math.ceil(Math.abs(startDate.getTime() - endDate.getTime()) / (1000 * 60 * 60 * 24));
```

## 示例

```js
console.log(diffDays(new Date('2021-12-12'), new Date('2021-12-01'))); // 11
```
