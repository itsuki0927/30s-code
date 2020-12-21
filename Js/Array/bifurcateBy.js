/**
 * 根据给定过滤功能的结果将值分为两组
 *
 * @param {any[]} arr 源数组
 * @param {(val:any,index:number) => boolean} fn 过滤功能函数
 * @returns {any[][]}
 */
const brfurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []])

// example

bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b')
// [ ['beep', 'boop', 'bar'], ['foo'] ]
