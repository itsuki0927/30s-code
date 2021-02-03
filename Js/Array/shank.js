/**
 * splice实现
 *
 * @param {any[]} arr 源数组
 * @param {number} index 下标
 * @param {number} delCount 删除个数
 * @param {...any[]} elements 插入元素
 * @returns {any[]}
 */
const shank = (arr, index = 0, delCount = 0, ...elements) =>
  arr
    .slice(0, index)
    .concat(elements)
    .concat(arr.slice(index + delCount))

// example
const names = ['alpha', 'bravo', 'charlie']
const namesAndDelta = shank(names, 1, 0, 'delta')
// [ 'alpha', 'delta', 'bravo', 'charlie' ]
const namesNoBravo = shank(names, 1, 1) // [ 'alpha', 'charlie' ]
console.log(names) // ['alpha', 'bravo', 'charlie']
