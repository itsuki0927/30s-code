/**
 * 创建一个冻结的Set对象
 *
 * @param {any} iterable
 * @returns {Set}
 */
const frozenSet = iterable => {
  const set = new Set(iterable)
  set.add = undefined
  set.delete = undefined
  set.clear = undefined
  return set
}

// example
frozenSet([1, 2, 3, 1, 2])
// Set { 1, 2, 3, add: undefined, delete: undefined, clear: undefined }
