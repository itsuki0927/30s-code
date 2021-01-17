/**
 * 初始化一个数组，该数组包含指定范围内的数字（反向），其中开始和结束包含其共同差值步骤
 *
 * @param {number} end 结束范围
 * @param {number} start 开始范围
 * @param {number} step 步幅
 * @returns {number[]}
 */
const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil(end - start + 1) }).map(
    (_, i, arr) => (arr.length - i - 1) * step + start,
  )

// example
initializeArrayWithRangeRight(5) // [5, 4, 3, 2, 1, 0]
initializeArrayWithRangeRight(7, 3) // [7, 6, 5, 4, 3]
initializeArrayWithRangeRight(9, 0, 2) // [8, 6, 4, 2, 0]
