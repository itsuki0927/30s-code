/**
 * 改变原始数组以过滤掉指定的值
 *
 * @param {string[]} arr 源数组
 * @param {...string[]} args 过滤数组
 * @returns
 */
const pull = (arr, ...args) => {
  let argState = Array.isArray(args) ? args[0] : args
  const pulled = arr.filter(v => !argState.includes(v))
  arr.length = 0
  pulled.forEach(e => arr.push(e))
}

// example
let myArray = ['a', 'b', 'c', 'a', 'b', 'c']
pull(myArray, 'a', 'c') // myArray = [ 'b', 'b' ]
