/**
 * 查找应将值插入数组以保持其排序顺序的最高索引
 *
 * @param {number[]} arr 源数组
 * @param {number} n 值
 * @returns {number} 最低索引
 */
const sortedLastIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1]
  const index = arr.reverse().findIndex(v => (isDescending ? n <= el : n >= el))
  return index === -1 ? 0 : arr.length - index
}

// example
sortedLastIndex([10, 20, 30, 30, 40], 30) // 4
