/**
 * 冒泡排序
 *
 * @param {number[]} arr 源数组
 * @returns {number[]} 排序好的数组
 */
const bubbleSort = arr => {
  let swapped = false
  const a = [...arr]

  for (let i = 1; i < a.length - 1; i++) {
    swapped = false
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j + 1] < a[j]) {
        ;[a[j], a[j + 1]] = [a[j + 1], a[j]]
        swapped = true
      }
    }
    if (!swapped) return a
  }

  return a
}

// example
bubbleSort([2, 1, 4, 3]) // [1,2,3,4]
