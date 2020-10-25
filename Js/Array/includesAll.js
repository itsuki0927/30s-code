/**
 * 检查values中的所有元素是否都包含在arr中
 *
 * @param {number[]} arr 源数组
 * @param {number[]} values 源数组
 * @returns {boolean} arr数组是否全部包含values数组
 */
const includesAll = (arr, values) => values.every(v => arr.includes(v))

// example
const includesAllResult = includesAll([1, 2, 3, 4], [1, 4])
console.log('includesAllResult:', includesAllResult)
// true

const includesAllResult2 = includesAll([1, 2, 3, 4], [1, 5])
console.log('includesAllResult2:', includesAllResult2)
// false
