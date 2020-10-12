/**
 * 检查数组中的所有元素是否相等
 *
 * @param {any[]} arr 源数组
 * @returns 验证结果
 */
const allEqual = arr => arr.every(item => item === arr[0])

const allEqualResult1 = allEqual([1, 2, 3, 4, 5, 6])
console.log('allEqualResult1:', allEqualResult1)
// false

const allEqualResult2 = allEqual([1, 1, 1, 1])
console.log('allEqualResult2:', allEqualResult2)
// true
