/**
 * 返回数组中最频繁的元素
 *
 * @param {string[]} arr 源数组
 * @returns {string}
 */
const mostFrequent = arr =>
  Object.entries(
    arr.reduce((a, v) => {
      a[v] = (a[v] || 0) + 1
      return a
    }, {}),
  ).reduce((a, v) => (v[1] > a[1] ? v : a), [null, 0])[0]

// example
mostFrequent(['a', 'b', 'a', 'c', 'a', 'a', 'b']) // 'a'
