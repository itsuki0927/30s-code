/**
 * 使用提供的函数将每个元素映射到一个值后，计算数组的总和
 */
const sumBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((a, b) => a + b, 0)

// example
sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], x => x.n) // 20
sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n') // 2
