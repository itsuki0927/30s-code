/**
 * 对一个累加器和数组中的每个元素（从左到右）应用一个函数，返回一个依次减小的值的数组
 *
 * @param {number[]} arr 源数组
 * @param {(a:number,b:number,index:number,arr:number[])=>number} fn 累加函数
 * @param {number} acc 初始值
 * @returns {number[]} 累加值数组
 */
const reduceSuccessive = (arr, fn, acc) =>
  arr.reduce((res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res), [acc])

// example
reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0)
// [0, 1, 3, 6, 10, 15, 21]
