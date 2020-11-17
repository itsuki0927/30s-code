/**
 * 创建一个数组，其中从头开始删除了n个元素
 *
 * @param {any[]} arr 源数组
 * @param {number} n 元素长度
 * @returns {any[]}
 */
const take = (arr, n = 1) => arr.slice(0, n)

// example
take([1, 2, 3], 5) // [1, 2, 3]
take([1, 2, 3], 0) // []
