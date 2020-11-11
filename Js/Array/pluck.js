/**
 * 将对象数组转换为与指定键对应的值数组
 *
 * @param {any[]} arr 源数组
 * @param {string} key 指定键
 * @returns {any[]} 字段值组成的新数组
 */
const pluck = (arr, key) => arr.map(item => item[key])

// example
const simpsons = [
  { name: 'lisa', age: 8 },
  { name: 'homer', age: 36 },
  { name: 'marge', age: 34 },
  { name: 'bart', age: 10 },
]
pluck(simpsons, name) // ['lisa', 'homer', 'marge', 'bart']

const list = ['a', 'b', 'c']
