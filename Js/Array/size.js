/**
 * 获取array、object、string的长度
 *
 * @param {Array | Object | string} val 源数据
 * @returns {number}
 */
const size = val =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === 'object'
    ? val.size || val.length || Object.keys(val).length
    : typeof val === 'string'
    ? new Blob(val).size
    : 0

// example
size([1, 2, 3, 4, 5]) // 5
size('size') // 4
size({ one: 1, two: 2, three: 3 }) // 3
