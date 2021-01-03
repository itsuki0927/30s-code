/**
 * 将一个数组分成n个较小的数组
 *
 * @param {number[]} arr 源数组
 * @param {number} n 切割大小
 * @returns {number[][]}
 */
const chunkIntoN = (arr, n) => {
  const size = Math.ceil(arr.length / n)
  return Array.from({ length: n }, (_, i) => arr.slice(i * size, i * size + size))
}

// example
chunkIntoN([1, 2, 3, 4, 5, 6, 7], 4) // [[1, 2], [3, 4], [5, 6], [7]]
