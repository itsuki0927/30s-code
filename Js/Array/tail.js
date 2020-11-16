/**
 * 返回数组中除第一个元素外的所有元素
 *
 * @param {any[]} 源数组
 * @returns {any[]}
 */
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr)

// example
tail([1, 2, 3]) // [2, 3]
tail([1]) // [1]
