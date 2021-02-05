/**
 * 根据提供的迭代器函数，找到应将值插入数组以保持其排序顺序的最低索引
 *
 * @param {any[]} arr 源数组
 * @param {any} n 值
 * @param {(item:any) => any} fn 迭代器函数
 * @returns {number}
 */
const sortedIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1])
  const val = fn(n)
  const index = arr.findIndex(v => (isDescending ? val >= fn(v) : val <= fn(v)))
  return index === -1 ? arr.length : index
}

// example
sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x) // 0
