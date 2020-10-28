/**
 * 检查值是否为[]、{}、''、null、undefined、没有可枚举属性
 *
 * @param {any} val 源数据
 * @returns {boolean}
 */
const isEmpty = val => val == null || !(Object.keys(val) || val).length

// example
isEmpty([]) // true
isEmpty({}) // true
isEmpty('') // true
isEmpty([1, 2]) // false
isEmpty({ a: 1, b: 2 }) // false
isEmpty('text') // false
isEmpty(123) // true - type is not considered a collection
isEmpty(true) // true - type is not considered a collection
