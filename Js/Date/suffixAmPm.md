# suffixAmPm

给小时添加 am、pm 前缀。

## 技巧

- h 是 0-23 的小时数。
- `h % 12`拿到正确的小时。
- `h` 跟 12 做比较判断是上午还是下午。

## code

```js
const suffixAmPm = h => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? 'am' : 'pm'}`;
```

```ts
const suffixAmPm = (h: number) => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? 'am' : 'pm'}`;
```

## 示例

```js
console.log(suffixAmPm(0)); // '12am'
console.log(suffixAmPm(5)); // '5am'
console.log(suffixAmPm(12)); // '12pm'
console.log(suffixAmPm(15)); // '3pm'
console.log(suffixAmPm(23)); // '11pm'
```
