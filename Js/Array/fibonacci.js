/**
 * 生成一个指定长度的斐波那契数列
 *
 * @param {number} n 长度
 * @returns {number[]} 指定长度的斐波那契数列
 */
const fibonacci = n =>
  array
    .from({ length: n })
    .reduce(
      (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
      [],
    )

// example
const fibonacciResult = fibonacci(6)
console.log('fibonacciResult:', fibonacciResult)
// [0,1,1,2,3,5]
