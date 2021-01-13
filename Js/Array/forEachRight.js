/**
 * 反向forEach
 *
 * @param {any[]} arr 源数组
 * @param {(item:any,index:number,arr:any[]) => void}
 */
const forEachRight = (arr, callback) => arr.slice().reverse().forEach(callback)

// example
forEachRight([1, 2, 3, 4], val => console.log(val)) // 4 3 2 1
