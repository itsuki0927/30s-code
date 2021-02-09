/*
 * 创建一个从末尾删除n个元素的数组
 *
 * @param {number[]} arr 源数组
 * @param {number} n n个元素
 * @returns {number[]}
 */
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length)

// example
takeRight([1, 2, 3], 2) // [ 2, 3 ]
takeRight([1, 2, 3]) // [3]
