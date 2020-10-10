/**
 * 根据给定的函数对数组的元素进行分组，并返回每个组中元素的计数
 *
 * @param {any[]} arr 源数组
 * @param {(item:any)=>any | string} fn 转换的函数、字段
 * @returns 统计出来的对象
 */
const countBy = (arr, fn) =>
  arr.map(typeof fn == 'function' ? fn : val => val[fn]).reduce((acc, v) => {
    acc[v] = (acc[v] || 0) + 1
    return acc
  }, {})

// example
const countByResult1 = countBy([6.1, 4.2, 6.3], Math.floor)
const countByResult2 = countBy(['one', 'two', 'three'], 'length')
const countByResult3 = countBy([{ count: 5 }, { count: 10 }, { count: 5 }], x => x.count)

console.log('countByResult1:', countByResult1)
// {4: 1, 6: 2}

console.log('countByResult2:', countByResult2)
// {3: 2, 5: 1}

console.log('countByResult3:', countByResult3)
// {5: 2, 10: 1}
