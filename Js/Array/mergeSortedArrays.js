/**
 * 将两个排序数组合并为一个
 *
 * @param {number[]} a 源数组
 * @param {number[]} b 源数组
 * @returns {number[]} 排序后的数组
 */
const mergeSortedArrays = (a, b) => {
  const _a = [...a],
    _b = [...b]
  return Array.from({ length: _a.length + _b.length }, () => {
    if (!_a.length) return _b.shift()
    else if (!_b.length) return _a.shift()
    else return _a[0] > _b[0] ? _b.shift() : _a.shift()
  })
}

// example
mergeSortedArrays([1, 4, 5], [2, 3, 6]) // [1, 2, 3, 4, 5, 6]
