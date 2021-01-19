/**
 * 创建具有给定值的n维数组
 *
 * @param {number} val 数值
 * @param {number[]} args 参数
 * @returns
 */
const initializeNDArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)))

// example
initializeNDArray(1, 3) // [1,1,1]
initializeNDArray(5, 2, 2, 2) // [[[5, 5], [5, 5]], [[5, 5], [5, 5]]]
