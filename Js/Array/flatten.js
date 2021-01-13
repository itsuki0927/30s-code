/**
 * 数组扁平化
 *
 * @param {any[]} arr 源数组
 * @param {number} depth 扁平深度
 * @returns {any[]} 扁平化的数组
 */
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), [])

// example
flatten([1, [2], 3, 4]) // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2) // [1, 2, 3, [4, 5], 6, 7, 8]
