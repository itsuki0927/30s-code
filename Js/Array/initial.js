/**
 * 返回数组中除最后一个元素之外的所有元素
 *
 * @param {any[]} arr 源数组
 * @returns {any[]}
 */
const initial = arr => arr.slice(0, -1)

// example
const initialResult = initial([1, 2, 3])
console.log('initialResult:', initialResult)
// [1,2]
