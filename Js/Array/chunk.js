/**
 * 将一个数组分成指定大小的较小数组
 *
 * @param {any[]} arr 源数组
 * @param {number} size 切割大小
 * @returns
 */
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, (i + 1) * size),
  )

// example

chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
