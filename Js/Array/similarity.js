/**
 * 返回同时出现在两个数组中的元素的数组
 *
 * @param {number[]} arr 源数组
 * @param {number[]} values 源数组
 * @returns {number[]}
 */
const similarity = (arr, values) => arr.filter(v => values.includes(v))

// example
similarity([1, 2, 3], [1, 2, 4]) // [1,2]
