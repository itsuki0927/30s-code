/**
 * 突变原始数组以滤除指定索引处的值。 返回移除的元素
 *
 * @param {number[]} arr 源数组
 * @param {number[]} pullArr 删除指定索引数组
 * @returns {number[]}
 */
const pullAtIndex = (arr, pullArr) => {
  const removed = []
  const pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((_, i) => !pullArr.includes(i))
  arr.length = 0
  pulled.forEach(v => arr.push(v))
  return removed
}

// example
let myArray = ['a', 'b', 'c', 'd']
let pulled = pullAtIndex(myArray, [1, 3])
// myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
