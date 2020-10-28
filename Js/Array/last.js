/**
 * 返回数组最后一个元素
 *
 * @param {any[]} arr 源数组
 * @returns {any} 数组最后一个元素
 */
const last = arr => (arr && arr.length ? arr[arr.length - 1] : undefined)

// example
last([1, 2, 3]) // 3
last([]) // undefined
last(null) // undefined
last(undefined) // undefined
