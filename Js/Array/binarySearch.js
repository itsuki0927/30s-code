/**
 * 二分查找
 *
 * @param {number[]} arr 源数组
 * @param {number} item 查找项
 * @returns {number} 下标
 */
const binarySearch = (arr, item) => {
  let l = 0,
    r = arr.length - 1

  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    const guess = arr[mid]
    if (guess === item) return mid
    if (guess > item) r = mid - 1
    else l = mid + 1
  }

  return -1
}

// example
binarySearch([1, 2, 3, 4, 5], 1) // 0
binarySearch([1, 2, 3, 4, 5], 5) // 4
binarySearch([1, 2, 3, 4, 5], 6) // -1
