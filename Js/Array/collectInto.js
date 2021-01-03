/**
 * 将接受数组的函数更改为可变函数
 *
 * @param {(...args:any[])=>any} fn 函数
 * @param {...args} args 参数
 */
const collectInto = fn => (...args) => fn(args)

// example
const Pall = collectInto(Promise.all.bind(Promise))
let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3))
Pall(p1, p2, p3).then(console.log) // [1, 2, 3] (after about 2 seconds)
