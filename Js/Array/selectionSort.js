/**
 * 选择排序
 *
 * @param {number[]} arr 源数组
 * @param {number[]}
 */
const selectionSort = arr => {
  const a = [...arr]
  for (let i = 0; i < a.length; i++) {
    const min = a.slice(i + 1).reduce((acc, val, j) => (val < a[acc] ? i + j + 1 : acc), i)
    if (min !== i) [a[i], a[min]] = [a[min], a[i]]
  }
}

// example
selectionSort([5, 1, 4, 2, 3]) // [1, 2, 3, 4, 5]
