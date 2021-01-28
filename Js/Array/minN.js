/*
 * 返回数组中的n个最小元素
 *
 * @param {number[]} arr 源数组
 * @param {number} n n个元素
 * returns {number[]}
 */
const minN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n)

// example
minN([1, 2, 3]) // [1]
minN([1, 2, 3], 2) // [1, 2]
