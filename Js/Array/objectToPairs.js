/**
 * 从一个对象创建一个键-值对数组
 *
 * @param {object} obj 源数据
 * @returns {any[][]} 键值对数组
 */
const objectToPairs = obj => Object.entries(obj)

// example
objectToPairs({ a: 1, b: 2 }) // [['a',1],['b',1]]
