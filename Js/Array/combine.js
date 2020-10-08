/**
 * 组合两个对象数组，使用指定的键来匹配对象
 *
 * @param {Array} a 源数组1
 * @param {Array} b 源数组2
 * @param {String} prop 指定键
 * @returns {Array} 返回连接后的新数组
 */
const combine = (a, b, prop) =>
  Object.values(
    [...a, ...b].reduce((acc, v) => {
      if (v[prop]) {
        acc[v[prop]] = acc[v[prop]] ? { ...acc[v[prop]], ...v } : { ...v }
      }
      return acc
    }, {}),
  )

const x = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Maria' },
]
const y = [{ id: 1, age: 28 }, { id: 3, age: 26 }, { age: 3 }]
const combinedValues = combine(x, y, 'id')
console.log('combinedValues:', combinedValues)

// [
//  { id: 1, name: 'John', age: 28 },
//  { id: 2, name: 'Maria' },
//  { id: 3, age: 26 }
// ]
