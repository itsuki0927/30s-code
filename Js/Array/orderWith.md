# orderWith

根据提供的顺序数组，按属性排序对象数组。

## 技巧

- 使用`Array.prototype.reduce()`从`order`数组中创建一个对象，其中值作为键，原始索引作为值。
- 使用`Array.prototype.sort()`对给定数组进行排序，跳过`prop`为空或不在`order`数组中的元素。

## code

```js
const orderWith = (arr, prop, order) => {
  const orderValues = order.reduce((acc, v, i) => {
    acc[v] = i;
    return acc;
  }, {});

  return [...arr].sort((a, b) => {
    if (orderValues[a[prop]] === undefined) return 1;
    if (orderValues[b[prop]] === undefined) return 1;
    return orderValues[a[prop]] - orderValues[b[prop]];
  });
};
```

## 示例

```js
const users = [
  { name: 'fred', language: 'Javascript' },
  { name: 'barney', language: 'TypeScript' },
  { name: 'frannie', language: 'Javascript' },
  { name: 'anna', language: 'Java' },
  { name: 'jimmy' },
  { name: 'nicky', language: 'Python' },
];
console.log(orderWith(users, 'language', ['Javascript', 'TypeScript', 'Java']));
/* 
[
  { name: 'fred', language: 'Javascript' },
  { name: 'frannie', language: 'Javascript' },
  { name: 'barney', language: 'TypeScript' },
  { name: 'anna', language: 'Java' },
  { name: 'jimmy' },
  { name: 'nicky', language: 'Python' }
]
*/
```
