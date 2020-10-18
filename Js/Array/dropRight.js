/**
 * 返回一个新数组，其中右边删除了n个元素
 *
 * @param {any[]} arr 源数组
 * @param {number} n 删除个数
 * @param {any[]} 删除n个元素的新数组
 */
const dropRight = (arr, n = 1) => arr.slice(0, -n)

// example
const dropRightResult = dropRight([1, 2, 3])
console.log('dropRightResult:', dropRightResult)
// [1,2,3]

const dropRightResult2 = dropRight([1, 2, 3], 2)
console.log('dropRightResult2:', dropRightResult2)
// [1]

const dropRightResult3 = dropRight([1, 2, 3], 42)
console.log('dropRightResult3:', dropRightResult3)
// []
