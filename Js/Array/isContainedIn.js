/**
 * 检查第一个数组的元素是否包含在第二个数组中，而不管顺序如何
 *
 * @param {number[]} a 源数组
 * @param {number[]} b 源数组
 * @returns {boolean} 是否包含
 */
const isContainedIn = (a, b) => {
  for (const v of new Set(a)) {
    if (!b.some(e => e === v) || a.filter(e => e === v).length > b.filter(e => e === v).length) {
      return false
    }
  }
  return true
}

// example
isContainedIn([1, 4], [2, 4, 1]) // true
