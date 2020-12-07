/**
 * 根据给定过滤器数组的结果将值分为两组
 *
 * @param {any[]} arr 源数组
 * @param {boolean[]} filter 过滤器数组
 * @returns {any[][]}
 */
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []])

// example
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true])
// [ ['beep', 'boop', 'bar'], ['foo'] ]
