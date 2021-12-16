# capitalize

字符串首字母大写。

## 技巧

- 使用`String.prototype.charAt(0)` 读取首个字符串。
- 使用`String.prototype.toUpperCase()` 进行字符大写。
- 使用`Sring.prototype.slice(1)` 读取剩余字符。
- 使用模版引擎进行字符串拼接。

## code

```js
const capitalize = val => `${val.charAt(0).toUpperCase()}${val.slice(1)}`;

const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;
```

## 示例

```js
console.log(capitalize('hello world')); // 'Hello world'
```
