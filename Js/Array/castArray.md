# castArray

将值强制转换为数组。

## 技巧

- 使用`Array.isArray()`判断是否为数组。
- 如果是的直接返回, 不是的返回包装后的数组。

## code

```js
const castArray = value => (Array.isArray(value) ? value : [value]);
```

## 示例

```js
castArray(1); // [1]
castArray([1, 2, 3]); // [1, 2, 3]
```
