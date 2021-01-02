/**
 * 桶排序
 *
 * @param {number[]} arr 源数组
 * @param {number} size 桶大小
 * @returns {number[]} 排序好的数组
 */
const bucketSort = (arr, size = 5) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const buckets = Array.from({ length: Math.floor((max - min) / size) + 1 }, () => [])

  arr.forEach(val => {
    const inx = Math.floor((val - min) / size)
    buckets[inx].push(val)
  })

  return arr.reduce((acc, bucket) => [...acc, ...bucket.sort((a, b) => a - b)])
}

// example
bucketSort([6, 3, 4, 1]) // [1, 3, 4, 6]
