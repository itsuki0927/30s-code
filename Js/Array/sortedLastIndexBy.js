/**
 * 根据提供的迭代器函数，找到一个值，该值应插入数组以保持其排序顺序的最高索引
 *
 * @param {any[]} arr 源数组
 * @param {any} n 值
 * @param {(item:any) => any} 迭代器函数
 * @returns {number}
 */
const sortedLastIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1])
  const val = fn(n)
  const index = arr.reverse().findIndex(el => (isDescending ? val <= el : val >= el))
  return index === -1 ? 0 : arr.length - index
}

// example
sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x) // 1
