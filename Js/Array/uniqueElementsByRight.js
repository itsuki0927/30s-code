/**
 * 从右侧开始，根据提供的比较器函数查找数组的所有唯一值
 *
 * @param {any[]} arr 源数组
 * @param {(a:any,b:any) => boolean} fn 比较器函数
 * @returns {any[]}
 */
const uniqueElementsByRight = (arr, fn) =>
  arr.reduceRight((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v)
    return acc
  }, [])

// example
uniqueElementsByRight(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' },
  ],
  (a, b) => a.id == b.id,
) // [ { id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' } ]
