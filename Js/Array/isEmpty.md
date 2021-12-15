# isEmpty

检查一个数组是否为空。

## 技巧

- 使用`Array.isArray()`判断是否为数组。
- 使用`Array.prototype.length`来判断数组是否为空。

## code

```js
const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;
```

## 示例

```js
isEmpty([]); // true
isEmpty([1, 2, 3]); // false
```
