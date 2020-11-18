/**
 * 查找数组中的所有唯一值
 *
 * @param {number[]} arr 源数组
 * @returns {number[]}
 */
const uniqueElements = arr => [...new Set(arr)]

// example
uniqueElements([1, 2, 2, 3, 4, 4, 5]) // [1,2,3,4,5]
