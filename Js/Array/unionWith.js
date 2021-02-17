/**
 * 使用提供的比较器函数，至少返回一次存在于两个数组中的每个元素的每个元素
 *
 * @param {number[]} a 源数组
 * @param {number[]} b 源数组
 * @param {(a:number,b:number) => boolean} comp 比较器函数
 * @returns {number[]}
 */
const unionWith = (a, b, comp) =>
  Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]))

// example
unionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b))
// [1, 1.2, 1.5, 3, 0, 3.9]
