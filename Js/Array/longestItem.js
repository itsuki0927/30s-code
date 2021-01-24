/**
 * 接受任意数量的可迭代对象或具有length属性的对象，并返回最长的对象
 *
 * @param {...any[]} vals 源数据
 * @returns {any}
 */
const longestItem = (...vals) => vals.reduce((x, c) => (x.length > c.length ? x : c))

// example
longestItem('this', 'is', 'a', 'testcase') // 'testcase'
longestItem(...['a', 'ab', 'abc']) // 'abc'
longestItem(...['a', 'ab', 'abc'], 'abcd') // 'abcd'
longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
longestItem([1, 2, 3], 'foobar') // 'foobar'
