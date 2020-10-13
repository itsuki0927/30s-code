/**
 * 计算部分和
 *
 * @param {number[]} nums 源数据
 * @returns {number[]} 返回部分和数组
 */
const accumulate = (...nums) => nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)], [])

// example
const accumulateResult1 = accumulate(1, 2, 3, 4)
console.log('accumulateResult1:', accumulateResult1)
// [1, 3, 6, 10]

const accumulateResult2 = accumulate(...[1, 2, 3, 4])
console.log('accumulateResult2:', accumulateResult2)
// [1, 3, 6, 10]
