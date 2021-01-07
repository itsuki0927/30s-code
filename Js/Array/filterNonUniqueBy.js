/**
 * 基于提供的比较器函数，创建一个过滤了非唯一值的数组
 *
 * @param {any[]} arr 源数组
 * @param {(a:any,b:any,i:number,j:number) => boolean}
 * @param {any[]} 唯一值数组
 */
const filterNonUniqueBy = (arr, fn) =>
  arr.filter((a, i) => arr.every((b, j) => (i === j) === fn(a, b, i, j)))

// example
filterNonUniqueBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' },
  ],
  (a, b) => a.id === b.id,
) // [ { id: 2, value: 'c' } ]
