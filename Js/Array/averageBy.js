/**
 * 使用提供的函数将每个元素映射到一个值后，计算数组的平均值
 *
 * @param {number[]} arr 源数组
 * @param {Function} fn 转换函数
 * @returns {number} 平均值
 */
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length

// example
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n) // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n') // 5
