/**
 * 过滤数组中的falsy值
 *
 * @param {any[]} arr 源数组
 * @returns {any[]} 过滤后的数组
 */
const compact = arr => arr.filter(Boolean)

// example
const compaceResult = compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])
console.log('compaceResult:', compaceResult)
// [ 1, 2, 3, 'a', 's', 34 ]
