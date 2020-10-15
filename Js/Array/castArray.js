/**
 * 如果不是数组，则将提供的值强制转换为数组
 *
 * @param {any} val 源数据
 * @returns {any[]} 数组
 */
const castArray = val => (Array.isArray(val) ? val : [val])

// example
const castArrayResult = castArray('foo')
console.log('castArrayResult:', castArrayResult)
// ['foo']

const castArrayResult2 = castArray([1])
console.log('castArrayResult2:', castArrayResult2)
// [1]
