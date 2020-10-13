/**
 * 两个数组之间的差
 *
 * @param {number[]} a 源数组
 * @param {number[]} b 源数组
 * @returns {number[]} 差值数组
 */
const difference = (a, b) => {
  const s = new Set(b)
  return a.filter(v => !s.has(v))
}

// example
const differenceResult = difference([1, 2, 3], [1, 2, 4])
console.log('differenceResult:', differenceResult)
// [3]
