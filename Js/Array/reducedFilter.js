/**
 * 根据条件过滤对象数组，同时也过滤掉未指定的键
 *
 * @param {any[]} data 源数组
 * @param {string[]} keys 指定的key数组
 * @param {(item:any) => any} fn 过滤函数
 */
const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(el => keys.reduce((acc, k) => ((acc[k] = el[k]), acc), {}))

// example
const data = [
  {
    id: 1,
    name: 'john',
    age: 24,
  },
  {
    id: 2,
    name: 'mike',
    age: 50,
  },
]
const reducedFilterResult = reducedFilter(data, ['id', 'name'], item => item.age > 24)
console.log('reducedFilterResult:', reducedFilterResult)
// [{ id: 2, name: 'mike'}]
