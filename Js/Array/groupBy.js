/**
 * 根据给定的函数对数组的元素进行分组
 *
 * @param {any[]} arr 源数组
 * @param {(item:any)=>any | string} fn 转换的函数、字段
 * @returns 返回分组后的对象
 */
const groupBy = (arr, fn) =>
  arr.map(typeof fn == 'function' ? fn : val => val[fn]).reduce((acc, v, i) => {
    acc[v] = (acc[v] || []).concat(arr[i])
    return acc
  }, {})

// example
const groupByResult1 = groupBy([6.1, 4.2, 6.3], Math.floor)
const groupByResult2 = groupBy(['one', 'two', 'three'], 'length')

console.log('groupByResult1:', groupByResult1)
// {4: [4.2], 6: [6.1, 6.3]}

console.log('groupByResult2:', groupByResult2)
// {3: ['one', 'two'], 5: ['three']}
