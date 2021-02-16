/**
 * 使用迭代器函数和初始种子值构建数组
 *
 * @param {(item:number) => boolean | [number, number]} fn 迭代器函数
 * @param {number} seed 初始值
 * @returns {number[]}
 */
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed]
  while ((val = fn(val[1]))) result.push(val[0])
  return result
}

// example
var f = n => (n > 50 ? false : [-n, n + 10])
console.log(unfold(f, 10)) // [-10, -20, -30, -40, -50]
