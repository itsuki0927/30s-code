/**
 * 根据给定的键值对创建一个对象
 *
 * @param {any[][]} 源数组
 * @returns {Object} 对象
 */
const objectFromPairs = arr => arr.reduce((a, [key, val]) => ((a[key] = val), a), {})

// example
objectFromPairs([
  ['a', 1],
  ['b', 2],
]) // {a: 1, b: 2}
