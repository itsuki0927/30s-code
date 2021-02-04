/**
 * 查找应将值插入数组以保持其排序顺序的最低索引
 *
 * @param {number[]} arr 源数组
 * @param {number} n 值
 * @returns {number} 最低索引
 */
const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1]
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el))
  return index === -1 ? arr.length - 1 : index
}

// example
sortedIndex([5, 3, 2, 1], 4) // 1
sortedIndex([30, 50], 40) // 1
