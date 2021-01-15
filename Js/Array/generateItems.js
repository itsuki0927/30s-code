/**
 * 使用给定的函数生成具有给定数量的项的数组
 *
 * @param {number} n 长度
 * @param {(index:number) => any} 生成item函数
 * @returns {any[]}
 */
const generateItems = (n, fn) => Array.from({ length: n }, (_, i) => fn(i))

// example
generateItems(10, Math.random)
// [0.21, 0.08, 0.40, 0.96, 0.96, 0.24, 0.19, 0.96, 0.42, 0.70]
