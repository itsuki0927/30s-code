/**
 * 检查arr中是否包含至少一个values中的元素
 *
 * @param {number[]} arr 源数组
 * @param {number[]} values 源数组
 * @return {boolean}
 */
const includesAny = (arr, values) => values.some(v => arr.includes(v))

// example
const includesAnyResult = includesAny([1, 2, 3, 4], [2, 9])
console.log('includesAnyResult:', includesAnyResult)
// true

const includesAnyResult2 = includesAny([1, 2, 3, 4], [8, 9])
console.log('includesAnyResult2:', includesAnyResult2)
// false
