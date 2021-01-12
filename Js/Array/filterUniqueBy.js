/**
 * 根据提供的比较器函数，创建一个过滤出唯一值的数组
 *
 * @param {any[]} arr 源数组
 * @param {(item1:any,i:number,item2:any,j:number) => boolean}
 * @param {any[]}
 */
const filterUniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.some((x, j) => (x !== j) === fn(v, x, i, j)))

// example
filterUniqueBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 3, value: 'd' },
    { id: 0, value: 'e' },
  ],
  (a, b) => a.id == b.id,
) // [ { id: 0, value: 'a' }, { id: 0, value: 'e' } ]
