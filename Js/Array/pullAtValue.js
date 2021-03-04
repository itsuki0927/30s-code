/*
 * 改变原始数组以过滤掉指定的值。返回删除的元素
 *
 * @param {string[]} arr 源数组
 * @param {string[]} pullArr 过滤指定值的数组
 * @return
 */
const pullAtValue = (arr, pullArr) => {
  const removed = [],
    mutateTo = []
  arr.forEach(v => {
    if (pullArr.includes(v)) {
      removed.push(v)
      return
    }
    mutateTo.push(v)
  })
  arr.length = 0
  mutateTo.forEach(v => arr.push(v))
  return removed
}

// example
let myArray = ['a', 'b', 'c', 'd']
let pulled = pullAtValue(myArray, ['b', 'd'])
// myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
