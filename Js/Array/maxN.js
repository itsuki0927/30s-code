/*
 * 返回数组中的n个最大元素
 *
 * @param {number[]} arr 源数组
 * @param {number} n n个元素
 * returns {number[]}
 */
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n)

// example
maxN([1, 2, 3]) // [3]
maxN([1, 2, 3], 2) // [3, 2]
