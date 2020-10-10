/**
 * 对数组执行稳定的排序，并在它们的值相同时保留项目的初始索引。 不更改原始数组，而是返回一个新数组
 *
 * @param {any[]} arr 源数组
 * @param {(a:any,b:any) => any} compare 比较函数
 * @returns {any[]} 排序好的新数组
 */
const stableSort = (arr, compare) =>
  arr
    .map((item, index) => ({ item, index }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item)

// example
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const stable = stableSort(arr, () => 0)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('stable:', stable)
