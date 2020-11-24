/**
 * 根据提供的映射函数，检查数组中的所有元素是否唯一
 *
 * @param {any[]} arr 源数组
 * @param {(item:any)=> any} fn 转换函数
 * @returns {boolean}
 */
const allUniqueBy = (arr, fn) => arr.length === new Set(arr.map(fn)).size

// example
allUniqueBy([1.2, 2.4, 2.9], Math.round) // true
allUniqueBy([1.2, 2.3, 2.4], Math.round) // false
