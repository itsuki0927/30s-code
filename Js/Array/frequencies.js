/**
 * 创建一个对象，将数组的唯一值作为键，并将其频率作为值
 *
 * @param {any[]} arr 源数组
 * @returns
 */
const frequencies = arr =>
  arr.reduce((a, v) => {
    a[v] = (a[v] || 0) + 1
    return a
  }, {})

// example
frequencies(['a', 'b', 'a', 'c', 'a', 'a', 'b']) // { a: 4, b: 2, c: 1 }
frequencies([...'ball']) // { b: 1, a: 1, l: 2 }
