/**
 * 创建一个数组数组，将zip产生的数组中的元素取消分组
 *
 * @param {any[]} arr 源数组
 * @returns {any[]}
 */
const unzip = arr =>
  arr.reduce(
    (acc, val) => (val.forEach((v, index) => acc[index].push(v)), acc),
    Array.from({ length: Math.max(...arr.map(v => v.length)) }, () => []),
  )

// example
unzip([
  ['a', 1, true],
  ['b', 2, false],
]) // [['a', 'b'], [1, 2], [true, false]]
unzip([
  ['a', 1, true],
  ['b', 2],
]) // [['a', 'b'], [1, 2], [true]]
