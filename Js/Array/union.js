/**
 * 返回存在于两个数组中的任何一个中的每个元素至少一次
 *
 * @param {number[]} a 源数组
 * @param {number[]} b 源数组
 * @returns {number[]}
 */
const union = (a, b) => Array.from(new Set([...a, ...b]))

// example
union([1, 2, 3], [4, 3, 2]) // [1, 2, 3, 4]
