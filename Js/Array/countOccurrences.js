/**
 * 计算数组中某个值的出现次数
 *
 * @param {number[]} arr 源数组
 * @param {number} val 值
 * @returns {number} 次数
 */
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)

// example
countOccurrences([1, 1, 2, 1, 2, 3], 1)
