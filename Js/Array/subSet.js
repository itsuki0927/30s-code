/**
 * 检查第一个可迭代对象是否是第二个可迭代对象的子集，不包括重复值
 *
 * @param {number[]} a 源数组
 * @param {number[]} b 源数组
 * @returns {boolean}
 */
const subSet = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b)
  return [...sA].every(v => sB.has(v))
}

// example
subSet(new Set([1, 2]), new Set([1, 2, 3, 4])) // true
subSet(new Set([1, 5]), new Set([1, 2, 3, 4])) // false
