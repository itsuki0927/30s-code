/**
 * 创建元素数组，将zip生成的数组中的元素解分组，并应用提供的函数
 *
 * @param {any[][]} arr 源数组
 * @param {(...args)=>any} fn 转换函数
 * @returns 返回数组
 */
const unzipWith = (arr, fn) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({ length: Math.max(...arr.map(x => x.length)) }).map(() => []),
    )
    .map(val => fn(...val))

const unzipResult = unzipWith(
  [
    [1, 10, 100],
    [2, 20, 200],
  ],
  (...args) => args.reduce((acc, v) => acc + v, 0),
) // [3, 30, 300]

console.log('unzipResult:', unzipResult)
