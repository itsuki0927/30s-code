/**
 * 初始化给定宽度，高度和值的2维数组
 *
 * @param {number} w 宽
 * @param {number} h 高
 * @param {number} val 填充值
 * @returns {number[][]} 二维数组
 */
const initial2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val))

// example
initial2DArray(2, 2, 0) // [[0,0],[0,0]]
