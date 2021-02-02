/**
 * 从数组中获取唯一键处的n个随机元素，最大为数组的大小
 *
 * @param {number[]} arr 源数组
 * @param {number} n 随便元素大小
 * @returns {number[]}
 */
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    ;[arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr.slice(0, n)
}

// example
sampleSize([1, 2, 3], 2) // [3, 1]
sampleSize([1, 2, 3], 4) // [2, 3, 1]
