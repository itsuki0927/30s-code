/**
 * 通过从阵列中创建每个可能的对，在提供的两个阵列中创建一个新阵列
 *
 * @param {any[]} a 源数组
 * @param {any[]} b 源数组
 * @returns {any[][]}
 */
const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), [])

// example
xProd([1, 2], ['a', 'b']) // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
