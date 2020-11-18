/**
 * 筛选出具有指定值之一的数组元素
 *
 * @param {number[]} arr 源数组
 * @param {...number[]} args 剔除的元素
 * @returns {number[]}
 */
const without = (arr, ...args) => arr.filter(item => !args.includes(item))

// example
without([2, 1, 2, 3], 1, 2) // [3]
