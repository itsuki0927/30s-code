/**
 * 返回数组中的每第n个元素
 *
 * @param {any[]} arr 源数组
 * @param {number} 第几个元素
 * @returns {any[]} 新数组
 */
const everyNth = (arr, nth) => arr.filter((v, i) => i % nth === nth - 1)

// example
const everyNthResult = everyNth([1, 2, 3, 4, 5, 6], 2)
console.log('everyNthResult:', everyNthResult)
// [2,4,6]
