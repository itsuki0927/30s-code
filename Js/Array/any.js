/**
 * 验证数组中是否有一个元素通过验证函数
 *
 * @param {any[]} arr 源数组
 * @param {(item:any)=>boolean} fn 验证函数
 * @returns 验证结果
 */
const any = (arr, fn = Boolean) => arr.some(fn)

const anyResult1 = any([0, 1, 2, 0], x => x >= 2)
console.log('anyResult1:', anyResult1)
// true

const anyResult2 = any([0, 0, 1, 0])
console.log('anyResult2:', anyResult2)
// true
