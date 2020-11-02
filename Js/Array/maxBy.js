/**
 * 使用提供的函数将每个元素映射到一个值后，返回数组的最大值
 *
 * @param {any[]} arr 源数组
 * @param {(item:any) => any} fn 转换函数
 * @returns {number} 最大值
 */
const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]))

// example
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], x => x.n) // 8
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n') // 8
