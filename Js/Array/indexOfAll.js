/**
 * 查找数组中val的所有索引。 如果val从不发生，则返回一个空数组
 *
 * @param {number[]} arr 源数组
 * @param {number} val 查找的值
 * @returns {number[]} 下标数组
 */
const indexOfAll = (arr, val) => arr.reduce((acc, e, i) => (e === val ? [...acc, i] : acc), [])

// example
indexOfAll([1, 2, 3, 1, 2, 3], 1) // [0, 3]
indexOfAll([1, 2, 3], 4) // []
