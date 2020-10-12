/**
 * 数组的每一项是否全部通过验证函数
 *
 * @param {any[]} arr 源数组
 * @param {(item:any) => boolean} fn 验证函数
 * @returns 验证结果
 */
const all = (arr, fn = Boolean) => arr.every(fn)

// example
const allResult1 = all([4, 2, 3], x => x > 1)
console.log('allResult1:', allResult1)
// true

const allResult2 = all([1, 2, 3])
console.log('allResult2:', allResult2)
// true
