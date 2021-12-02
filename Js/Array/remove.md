# remove

改变原始数组, 返回删除满足`fn`函数的元素。

## 技巧

- 使用`Array.isArray()` 判断是不是数组进行初始化。
- 使用`Array.prototype.filter()` 过滤出满足`fn`函数的元素。
- 使用`Array.prototype.splice()`和`Array.prototype.indexOf()`删除满足`fn`函数原始数组的元素。
- 使用`Array.prototype.reduce()` 返回结果。

## code

```js
const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
      }, [])
    : [];

const remove = (arr, fn) =>
  Array.isArray(arr)
    ? arr.reduce((acc, val, index) => {
        if (fn(val, index, arr)) {
          arr.splice(arr.indexOf(val), 1);
          return acc.concat(val);
        }
        return acc;
      }, [])
    : [];
```

## 示例

```js
console.log(remove([1, 2, 3, 4], n => n % 2 === 0)); // [2, 4]
```
