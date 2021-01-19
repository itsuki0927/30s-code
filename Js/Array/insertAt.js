/**
 * 突变原始数组以在给定索引之后插入给定值
 *
 * @param {number[]} arr 源数组
 * @param {number} i 下标
 * @param {number[]} ...v 插入元素
 */
const insertAt = (arr, i, ...v) => {
  arr.splice(i + 1, 0, ...v)
  return arr
}

// example
let myArray = [1, 2, 3, 4]
insertAt(myArray, 2, 5) // myArray = [1, 2, 3, 5, 4]

let otherArray = [2, 10]
insertAt(otherArray, 0, 4, 6, 8) // otherArray = [2, 4, 6, 8, 10]
