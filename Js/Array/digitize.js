/**
 * 将数字转换为数字数组，并在必要时删除其符号
 *
 * @param {number} n 源数据
 * @returns {number[]} 数字数组
 */
const digitize = n => [...`${Math.abs(n)}`].map(v => parseInt(v))

// example
const digitizeResult = digitize(123)
console.log('digitizeResult:', digitizeResult)
// [1, 2, 3]

const digitizeResult2 = digitize(-123)
console.log('digitizeResult2:', digitizeResult2)
// [1, 2, 3]
