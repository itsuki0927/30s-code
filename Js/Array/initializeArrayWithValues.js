/**
 * 用指定的值初始化并填充一个数组
 *
 * @param {number} n 长度
 * @param {number} val 值
 * @returns {number[]}
 */
const initializeArrayWithValues = (n, val = 0) => Array.from({ length: n }).fill(val)

// example
initializeArrayWithValues(5, 2) // [2, 2, 2, 2, 2]
