/**
 * 通过两个或更多对象的组合创建一个新对象
 *
 * @param {...object[]} objs 源数据
 * @returns {object} 合并后的数组
 */
const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((_, k) => {
        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k]
        return acc
      }, {}),
    {},
  )

// example
const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
}
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo',
}
merge(object, other)
// { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
