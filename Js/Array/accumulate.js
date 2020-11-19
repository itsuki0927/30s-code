/**
 * 创建一个部分和数组
 *
 * @param {...number[]} nums 源数组
 * @returns {number[]}
 */
const accumulate = (...nums) => nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)], [])

// example
accumulate(1, 2, 3, 4) // [1, 3, 6, 10]
accumulate(...[1, 2, 3, 4]) // [1, 3, 6, 10]
