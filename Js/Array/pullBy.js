/**
 * 根据给定的迭代器函数，修改原始数组以过滤指定的值
 *
 * @param {any[]} arr 源数组
 * @param {[any[], Function]} args 过滤的数组、转换的函数
 */
const pullBy = (arr, ...args) => {
  const { length } = args
  let fn = length > 1 ? args[length - 1] : undefined
  fn = typeof fn === 'function' ? (args.pop(), fn) : undefined
  const argsState = (Array.isArray(args[0]) ? args[0] : args).map(fn)
  const pulled = arr.filter(item => !argsState.includes(fn(item)))
  arr.length = 0
  pulled.forEach(v => arr.push(v))
}

const myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }]
pullBy(myArray, [{ x: 1 }, { x: 3 }], o => o.x)
console.log('myArray:', myArray)
// myArray = [{ x: 2 }]
