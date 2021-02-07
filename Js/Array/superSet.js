/**
 * 检查第一个可迭代对象是否是第二个可迭代对象的超集，不包括重复值
 *
 * @param {number[]} a 源数组
 * @param {number[]} b 源数组
 * @returns {boolean}
 */
const superSet = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b)
  return [...sB].every(v => sA.has(v))
}

// example
superSet(new Set([1, 2, 3, 4]), new Set([1, 2])) // true
superSet(new Set([1, 2, 3, 4]), new Set([1, 5])) // false
