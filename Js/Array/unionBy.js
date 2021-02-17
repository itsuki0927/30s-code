/**
 * 在将提供的函数应用于两个数组的每个数组元素之后，至少返回一次存在于两个数组中的每个数组的每个元素
 *
 * @param {any[]} a 源数组
 * @param {any[]} b 源数组
 * @param {(item:any) => any} fn 函数
 * @returns {any[]}
 */
const unionBy = (a, b, fn) => {
  const s = new Set(a.map(fn))
  return Array.from(new Set([...a, ...b.filter(v => !s.has(fn(v)))]))
}

// example
unionBy([2.1], [1.2, 2.3], Math.floor) // [2.1, 1.2]
unionBy([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], x => x.id)
// [{ id: 1 }, { id: 2 }, { id: 3 }]
