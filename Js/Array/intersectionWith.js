/**
 * 使用提供的比较器函数返回两个数组中都存在的元素
 *
 * @param {number[]} a 源数组
 * @param {number[]} b 源数组
 * @param {(x:number,y:number) => boolean} 比较器函数
 * @returns {number[]}
 */
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1)

// example
intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)) // [1.5, 3, 0]
