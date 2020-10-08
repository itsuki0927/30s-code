/**
 * 根据所提供的顺序数组，返回按属性排序的已排序的对象数组。
 *
 * @param {Array} arr 源数组
 * @param {String} prop 字段
 * @param {Array} order 顺序数组
 * @returns {Array} 返回已排序好的数组
 */
const orderWith = (arr, prop, order) => {
  const orderValues = order.reduce((acc, v, i) => {
    acc[v] = i
    return acc
  }, {})
  return [...arr].sort((a, b) => {
    const aVal = orderValues[a[prop]]
    const bVal = orderValues[b[prop]]
    if (aVal === undefined) return 1
    if (bVal === undefined) return -1
    return aVal - bVal
  })
}

const users = [
  { name: 'fred', language: 'Javascript' },
  { name: 'barney', language: 'TypeScript' },
  { name: 'frannie', language: 'Javascript' },
  { name: 'anna', language: 'Java' },
  { name: 'jimmy' },
  { name: 'nicky', language: 'Python' },
]
const sortedUsers = orderWith(users, 'language', ['TypeScript', 'Javascript', 'Java'])
console.log('sortedUsers:', sortedUsers)

/*
[
  { name: 'fred', language: 'Javascript' },
  { name: 'frannie', language: 'Javascript' },
  { name: 'barney', language: 'TypeScript' },
  { name: 'anna', language: 'Java' },
  { name: 'jimmy' },
  { name: 'nicky', language: 'Python' }
]
*/
