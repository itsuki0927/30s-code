/**
 * 将提供的函数应用于两个数组的每个数组元素后，返回两个数组之间的差
 *
 * @param {any[]} a 源数组
 * @param {any[]} b 源数组
 * @param {(item:any,index:number,arr:any[])=>any} fn 转换数组
 * @returns {any[]} 差集
 */
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn))
  return a.map(fn).filter(v => !s.has(v))
}

// example
differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor) // [1]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x) // [2]
