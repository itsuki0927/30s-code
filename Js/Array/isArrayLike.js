/**
 * 检查所提供的参数是否类似于数组（即可迭代）
 *
 * @param {any} obj 源数据
 * @returns {boolean} 是否为类数组
 */
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function'

// example
isArrayLike([1, 2, 3]) // true
isArrayLike(document.querySelectorAll('.className')) // true
isArrayLike('abc') // true
isArrayLike(null) // false
