/**
 * 检查两个可迭代对象是否不相交（没有公用值）
 *
 * @param {number[]} a 源数组
 * @param {number[]} b 源数组
 * @returns {boolean} 是否相交
 */
const isDisjoint = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b)
  return [...sA].every(v => !sB.has(v))
}

// example
isDisjoint(new Set([1, 2]), new Set([3, 4])) // true
isDisjoint(new Set([1, 2]), new Set([1, 3])) // false
