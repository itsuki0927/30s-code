/**
 * 返回数组的第n个元素
 *
 * @param {any[]} arr 源数组
 * @param {number} n 下标
 * @returns {any} n下标的元素
 */
const nthElement = (arr, n = 0) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0]

// example
nthElement(['a', 'b', 'c'], 1) // 'b'
nthElement(['a', 'b', 'b'], -3) // 'a'
