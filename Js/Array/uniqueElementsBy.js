/**
 * 根据提供的比较器函数查找数组的所有唯一值
 *
 * @param {any[]} arr 源数组
 * @param {(a:any,b:any) => boolean} fn 比较器函数
 * @returns {any[]}
 */
const uniqueElementsBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v)
    return acc
  }, [])

// example
uniqueElementsBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' },
  ],
  (a, b) => a.id == b.id,
) // [ { id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' } ]
