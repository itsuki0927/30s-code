/**
 * 创建由连续元素组成的n元组数组
 *
 * @param {number} n 几元
 * @param {any[]} arr 源数据
 * @returns {any[][]}
 */
const aperture = (n, arr) =>
  n > arr.length ? [] : arr.slice(n - 1).map((_, i) => arr.slice(i, i + n))

// example
aperture(2, [1, 2, 3, 4]) // [[1, 2], [2, 3], [3, 4]]
aperture(3, [1, 2, 3, 4]) // [[1, 2, 3], [2, 3, 4]]
aperture(5, [1, 2, 3, 4]) // []
