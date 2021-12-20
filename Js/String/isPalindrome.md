# isPalindrome

判断是否为回文字符串。

## 技巧

- 利用`String.prototype.split()`切割成字符数组。
- 利用`Array.prototype.reverse()`反转字符数组, 使用`Array.prototype.join('')`将数组拼接成字符串。
- 最后比较两个字符串, 返回结果。

## code

```js
const isPalindrome = str => str === str.split('').reverse().join('');
```

```ts
const isPalindrome = (str: string) => str === str.split('').reverse().join('');
```

## 示例

```js
isPalindrome('abc'); // false
isPalindrome('abcba'); // true
```
