/**
 * 交集
 *
 * @param {number[]} a 源数组
 * @param {number[]} b 源数组
 * @returns {number[]} 交集
 */
const intersectin = (a, b) => {
  const s = new Set(a)
  return [...new Set(b)].filter(v => s.has(v))
}

// example
intersection([1, 2, 3], [4, 3, 2]) // [2, 3]
