# zip

创建一个元素数组，根据元素在原始数组中的位置进行分组。

## 技巧

- 使用`Math.max()`找到参数数组的最大长度。
- 创建一个数组，将该长度作为返回值并使用数组。`from()`使用映射函数创建分组元素数组。
- 若参数数组的长度不同，则在找不到值的情况下使用`undefined`。

## code

```js
const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(x => x.length));
  return Array.from({ length: maxLength }, (_, col) => {
    return Array.from({ length: arrays.length }, (_, row) => arrays[row][col]);
  });
};
```

## 示例

```js
console.log(zip(['a', 'b'], [1, 2], [true, false])); // [['a', 1, true], ['b', 2, false]]
console.log(zip(['a'], [1, 2], [true, false])); // [['a', 1, true], [undefined, 2, false]]
```
