# orderBy

根据`props`以及`orders`排序数组。

## 技巧

- 在`props`数组上使用`Array.prototype.sort()`、`Array.prototype.reduce()`, 默认值为 0。
- 使用数组解构交换两个元素。
- 如果没有提供`orders`数组, 则默认采用升序`asc`。

## code

```js
const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];

        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0),
  );
```

## 示例

```js
const users = [
  { name: 'fred', age: 48 },
  { name: 'barney', age: 36 },
  { name: 'fred', age: 40 },
];
console.log(orderBy(users, ['name', 'age'], ['asc', 'desc']));
// [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]
console.log(orderBy(users, ['name', 'age']));
// [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]
```
