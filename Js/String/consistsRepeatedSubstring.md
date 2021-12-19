# consistsRepeatedSubstring

判断字符串是否由重复的字符串序列组成.

## 技巧

- 重复两个`str`利用`String.prototype.indexOf()`读取`str`出现的位置。
- 从下标为`1`的位置开始找, 返回下标与字符串的长度的比较值。

## code

```js
const consistsRepeatedSubstring = str => `${str}${str}`.indexOf(str, 1) !== str.length;
```

```ts
const consistsRepeatedSubstring = (str: string) => `${str}${str}`.indexOf(str, 1) !== str.length;
```

## 示例

```js
console.log(consistsRepeatedSubstring('aa')); // true
console.log(consistsRepeatedSubstring('aaa')); // true
console.log(consistsRepeatedSubstring('ababab')); // true
console.log(consistsRepeatedSubstring('abc')); // false
```
