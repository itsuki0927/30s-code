/**
 * 插入排序
 *
 * @param {number[]} arr 源数组
 * return {number[]} 排序好的数组
 */
const insertionSort = arr =>
  arr.reduce((acc, x) => {
    if (!acc.length) return [x]
    acc.some((y, j) => {
      if (x <= y) {
        acc.splice(j, 0, x)
        return true
      } else if (x > y && j === acc.length - 1) {
        acc.splice(j + 1, 0, x)
        return true
      }
      return false
    })
    return acc
  }, [])

// example
insertionSort([4, 3, 6, 1]) // [1,3,4,6]
