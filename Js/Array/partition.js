/**
 * 将元素分为两个数组，具体取决于每个元素提供的函数的真实性
 *
 * @param {any[]} arr 源数组
 * @param {(item:any,index:number,arr:any[])=> boolean}
 * @returns
 */
const partition = (arr, fn) =>
  arr.reduce(
    (acc, val, i) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val)
      return acc
    },
    [[], []],
  )

// example
const users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
]
partition(users, o => o.active)
// [
//   [{ user: 'fred', age: 40, active: true }],
//   [{ user: 'barney', age: 36, active: false }]
// ]
