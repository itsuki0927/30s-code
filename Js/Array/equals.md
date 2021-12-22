# equals

递归比较两个对象, 值是否相等。

## 技巧

- 检查两个值是否相同。
- 如果两个对象是`Date`通过`Date.prototype.getTime()`获取时间戳进行比较。
- 如果是基本数据类型则比较它们的值。
- 如果是对象检查它们的原型是否相同。
- 使用`Object.keys()`获取对象的 key 数组, 然后比较两个数组长度是否相同。
- 递归比较两个对象。

## code

```js
const equals = (a, b) => {
  if (a === b) return true;

  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) {
    return a === b;
  }

  if (a.prototype !== b.prototype) return false;

  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;

  return keys.every((k) => equals(a[k], b[k]));
};
```

## 示例

```js
console.log(
  equals(
    { a: [2, { e: 3 }], b: [4], c: 'foo' },
    { a: [2, { e: 3 }], b: [4], c: 'foo' }
  )
); // true
console.log(equals([1, 2, 3], { 0: 1, 1: 2, 2: 3 })); // true
```
