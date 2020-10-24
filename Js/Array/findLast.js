/**
 * 查找提供的函数为其返回真值的最后一个元素
 *
 * @param {any[]} arr 源数据
 * @param {(item:any, i:number, arr:any[]) => boolean} fn 过滤函数
 * @returns {any} 过滤后的数组的最后一个元素
 */
const findLast = (arr, fn) => arr.filter(fn).pop()

// example
const findLastResult = findLast([1, 2, 3, 4], n => n % 2 === 1)
console.log('findLastResult:', findLastResult)
// 3
