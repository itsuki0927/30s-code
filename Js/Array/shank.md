# shank

等同于`Array.prototype.splice()`, 但不是改变原数组, 而是返回一个修改后的新数组

## 技巧

- 使用`Array.prototype.slice()`和`Array.prototype.concat()`来得到一个带有删除现有元素和/或添加新元素后的新内容的数组。
- 使用`slice(0, startIdx)`添加`0-startIdx`的元素。
- 使用`concat(insertElements)`添加插入的新元素。
- 使用`concat(slice(start + delCount))` 添加最后的剩余元素。

## code

```js
const shank = (arr, startIdx = 0, delCount = 0, ...insertElements) =>
  arr
    .slice(0, startIdx)
    .concat(insertElements)
    .concat(arr.slice(startIdx + delCount));
```

## 示例

```js
const names = ['alpha', 'bravo', 'charlie'];
const namesAndDelta = shank(names, 1, 0, 'delta');
console.log(namesAndDelta); // [ 'alpha', 'delta', 'bravo', 'charlie' ]
const namesNoBravo = shank(names, 1, 1);
console.log(namesNoBravo); // [ 'alpha', 'charlie' ]
console.log(names); // ['alpha', 'bravo', 'charlie']
```
