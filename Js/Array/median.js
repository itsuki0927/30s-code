/**
 * 中位数
 *
 * @param {number[]} arr 源数组
 * @returns {number} 中位数
 */
const median = arr => {
  const mid = Math.floor(arr.length / 2)
  nums = [...arr].sort((a, b) => a - b)
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

// example
median([5, 6, 50, 1, -5]) // 5
