/**
 * 以算术级数返回一个数字数组，该数组从给定的正整数开始，直至指定的限制
 *
 * @param {number} n: 开始
 * @param {number} lim: 结束
 * @returns {number[]} 生成的数字数组
 *
 */
const arithmeticProgression = (n, lim) =>
  Array.from({ length: Math.ceil(lim / n) }, (v, i) => (i + 1) * n);

// example
const arithmeticProgressionResult = arithmeticProgression(5, 25);
console.log("arithmeticProgressionResult:", arithmeticProgressionResult);
// [5, 10, 15, 20, 25]
