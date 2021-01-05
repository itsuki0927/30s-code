/**
 * 数组扁平化
 *
 * @param {any[]} arr 源数组
 * @returns {any[]} 扁平化的数组
 */
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))

// example
deepFlatten([1, [2], [[3], 4], 5]) // [1, 2, 3, 4, 5]
