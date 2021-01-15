/**
 * 检查两个数组是否包含相同的元素，而不管顺序如何
 *
 * @param {any[]} a 源数组1
 * @param {any[]} b 源数组2
 * @returns {boolean}
 */
const haveSameContents = (a, b) => {
  for (const v of new Set([...a, ...b]))
    if (a.filter(e => e === v).length !== b.filter(e => e === v).length) return false
  return true
}

// example
haveSameContents([1, 2, 4], [4, 2, 1]) // true
