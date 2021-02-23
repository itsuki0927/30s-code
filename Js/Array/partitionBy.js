/**
 * 将fn应用于arr中的每个值，每次提供的函数返回新值时将其拆分
 *
 * @param {number[]} arr 源数组
 * @param {(v:number,i:number,a:number[]) => boolean} fn 函数
 * @returns {number[][]}
 */
const partitionBy = (arr, fn) =>
  arr.reduce(
    ({ res, last }, v, i, a) => {
      const next = fn(v, i, a)
      if (next !== last) res.push([v])
      else res[res.length - 1].push(v)
      return { res, last: next }
    },
    { res: [] },
  ).res

// example
const numbers = [1, 1, 3, 3, 4, 5, 5, 5]
partitionBy(numbers, n => n % 2 === 0) // [[1, 1, 3, 3], [4], [5, 5, 5]]
partitionBy(numbers, n => n) // [[1, 1], [3, 3], [4], [5, 5, 5]]
