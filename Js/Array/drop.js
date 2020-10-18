/**
 * 返回一个新数组，其中左侧删除了n个元素
 * @param {any[]} arr 源数组
 * @param {number} n 删除个数
 * @returns {any[]} 删除n个元素的新数组
 */
const drop = (arr, n = 1) => arr.slice(n)

// example
const dropResult = drop([1, 2, 3])
console.log('dropResult:', dropResult)
// [1,2,3]

const dropResult2 = drop([1, 2, 3], 2)
console.log('dropResult2:', dropResult2)
// [3]

const dropResult3 = drop([1, 2, 3], 42)
console.log('dropResult3:', dropResult3)
// []
