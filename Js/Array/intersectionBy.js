/**
 * 交集
 *
 * @param {number[]} a 源数组
 * @param {number[]} b 源数组
 * @returns {number[]} 交集
 */
const intersectionBy = (a, b, fn) => {
  const s = new Set(a.map(fn))
  return [...new Set(b)].filter(x => s.has(fn(x)))
}

// example
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor) // [2.1]
intersectionBy(
  [{ title: 'Apple' }, { title: 'Orange' }],
  [{ title: 'Orange' }, { title: 'Melon' }],
  x => x.title,
) // [{ title: 'Orange' }]
