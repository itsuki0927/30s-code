/**
 * 返回两个数组之间的对称差，而不过滤掉重复的值
 *
 * @param {number[]} a 源数组
 * @param {number[]} b 源数组
 * @returns {number[]}
 */
const symmetricDifference = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b)
  return [...a.filter(v => !sB.has(v)), ...b.filter(v => !sA.has(v))]
}

// example
symmetricDifference([1, 2, 3], [1, 2, 4]) // [3, 4]
symmetricDifference([1, 2, 2], [1, 3, 1]) // [2, 2, 3]
