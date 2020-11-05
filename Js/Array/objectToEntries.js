/**
 * 从一个对象创建一个键-值对数组
 *
 * @param {any} ob 源数据
 * @returns {any[][]} key-value数组
 */
const objectToEntries = obj => Object.keys(obj).map(k => [k, obj[k]])
const objectToEntries2 = obj => Object.entries(obj)

// example
objectToEntries({ a: 1, b: 2 }) // [ ['a', 1], ['b', 2] ]
