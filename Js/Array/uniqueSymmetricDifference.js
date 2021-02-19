/*
 * 返回两个数组之间的唯一对称差异，不包含两个数组中的重复值
 *
 * @param {number[]} a 源数组
 * @param {number[]} b 源数组
 * @returns {number[]}
 */
const uniqueSymmetricDifference = (a, b) => [
  ...new Set(...a.filter(v => !b.includes(v)), ...b.filter(v => !a.includes(v))),
]

// example
uniqueSymmetricDifference([1, 2, 3], [1, 2, 4]) // [3, 4]
uniqueSymmetricDifference([1, 2, 2], [1, 3, 1]) // [2, 3]
