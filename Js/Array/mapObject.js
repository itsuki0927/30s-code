/**
 * 使用函数将数组的值映射到对象，其中键-值对由原始值作为键，而函数的结果作为值
 *
 * @param {any[]} arr 源数组
 * @param {(item:any)=>any} fn 映射value的函数
 * @returns 返回对象
 */
const mapObject = (arr, fn) => arr.reduce((acc, k) => ((acc[k] = fn(k)), acc), {})

// example
const mapObjectResult = mapObject([1, 2, 3], a => a * a)

console.log('mapObjectResult:', mapObjectResult)
// { 1: 1, 2: 4, 3: 9 }
