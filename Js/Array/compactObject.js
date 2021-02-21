/**
 * 从对象或数组中深度删除所有'假值'
 *
 * @param {Object} val 源数据
 * @returns {Object}
 */
const compactObject = val => {
  const data = Array.isArray(val) ? val.filter(Boolean) : val
  return Object.keys(data).reduce(
    (acc, key) => {
      const value = data[key]
      if (Boolean(value)) {
        acc[key] = typeof value === 'object' ? compactObject(value) : value
      }
      return acc
    },
    Array.isArray(val) ? [] : {},
  )
}

// example
const obj = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: '',
  g: 'a',
  h: [null, false, '', true, 1, 'a'],
  i: { j: 0, k: false, l: 'a' },
}
compactObject(obj)
// { c: true, e: 1, g: 'a', h: [ true, 1, 'a' ], i: { l: 'a' } }
