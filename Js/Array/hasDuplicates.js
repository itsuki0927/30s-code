/**
 * 检查平面数组中是否有重复的值
 *
 * @param {any[]} arr 源数组
 * @returns {Boolean} 是否有重复的值
 */
const hasDuplicates = arr => new Set(arr).size !== arr.length

hasDuplicates([0, 1, 1, 2]) // true
hasDuplicates([0, 1, 2, 3]) // false
