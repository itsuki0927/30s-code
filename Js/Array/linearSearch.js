/**
 * 线性搜索算法查找数组中给定元素的第一个索引
 *
 * @param {number[]} arr 源数组
 * @param {number} item 查找项
 */
const linearSearch = (arr, item) => {
  for (const i in arr) {
    if (arr[i] === item) return +i
  }
  return -1
}

// example
linearSearch([2, 9, 9], 9) // 1
linearSearch([2, 9, 9], 7) // -1
