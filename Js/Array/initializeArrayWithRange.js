/**
 * 初始化一个数组，该数组包含指定范围内的数字，其中开始和结束包括其共同差值步骤
 *
 * @param {number} end 结束范围
 * @param {number} start 开始范围
 * @param {number} step 步幅
 * @returns {number[]}
 */
const initializeArrayWithRange = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end - start + 1) / step) }, (_, i) => i * step + start)

// example
initializeArrayWithRange(5) // [0, 1, 2, 3, 4, 5]
initializeArrayWithRange(7, 3) // [3, 4, 5, 6, 7]
initializeArrayWithRange(9, 0, 2) // [0, 2, 4, 6, 8]
