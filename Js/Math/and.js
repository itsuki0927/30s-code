/**
 * 判断两个参数是不是都是真值
 *
 * @param {any} a 源数据
 * @param {any} b 源数据
 * @returns {boolean} 验证结果
 */
const and = (a, b) => a && b

// example
const andResult1 = and(true, true)
console.log('andResult1:', andResult1)
// true

const andResult2 = and(true, false)
console.log('andResult2:', andResult2)
// false

const andResult3 = and(false, false)
console.log('andResult3:', andResult3)
// false
