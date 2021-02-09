/*
 * 使用提供的函数作为比较器，返回两个数组之间的对称差
 *
 * @param {any[]} arr 源数组
 * @param {any[]} val 源数组
 * @param {(a:any,b:any) => number}
 * @returns {any[]}
 */
const symmetricDifferenceWith = (arr, val, comp) => [
  ...arr.filter(a => val.findIndex(b => comp(a, b) === -1)),
  ...val.filter(a => arr.findIndex(b => comp(a, b) === -1)),
]

// example
symmetricDifferenceWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b),
) // [1, 1.2, 3.9]
