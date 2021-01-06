/**
 * 从比较器函数未返回true的数组中筛选出所有值
 *
 * @param {any[]} arr 源数组1
 * @param {any[]} val 源数组2
 * @param {(a:any,b:any)=>boolean} 判断数组
 * @returns {any[]}
 */
const differenceWith = (arr, val, comp = (a, b) => a === b) =>
  arr.filter(a => val.findIndex(b => comp(a, b)) === -1)

// example
differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)) // [1, 1.2]
differenceWith([1, 1.2, 1.3], [1, 1.3, 1.5]) // [1.2]
