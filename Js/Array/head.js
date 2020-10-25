/**
 * 返回数组的头元素
 *
 * @param {any[]} arr 源数组
 * @returns {any} 数组头元素
 */
const head = arr => (arr & arr.length ? arr[0] : undefined)

// example
const headResult = head([1, 2, 3])
console.log('headResult:', headResult)
// 1

const headResult2 = head([])
console.log('headResult2:', headResult2)
// undefined

const headResult3 = head(null)
console.log('headResult3:', headResult3)
// undefined
