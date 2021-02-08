/**
 * 将提供的函数应用于两个数组的每个数组元素后，返回两个数组之间的对称差
 *
 * @param {any[]} a 源数组
 * @param {any[]} b 源数组
 * @param {(item:any) => any} fn 转换函数
 * @returns {any[]}
 */
const symmetricDifferenceBy = (a, b, fn) => {
  const sA = new Set(a.map(v => fn(v))),
    sB = new Set(b.map(v => fn(v)))
  return [...a.filter(v => !sB.has(fn(v))), ...b.filter(v => !sA.has(fn(v)))]
}

// example
symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor) // [ 1.2, 3.4 ]
symmetricDifferenceBy(
  [{ id: 1 }, { id: 2 }, { id: 3 }],
  [{ id: 1 }, { id: 2 }, { id: 4 }],
  i => i.id,
)
// [{ id: 3 }, { id: 4 }]
