/*
 * 检查谓词函数对于集合的所有元素是否为真
 *
 * @param {any[]} collection 源数组
 * @param {string} pre 键
 * @returns {boolean}
 */
const truthCheckCollection = (collection, pre) => collection.every(obj => obj[pre])

// example
truthCheckCollection(
  [
    { user: 'Tinky-Winky', sex: 'male' },
    { user: 'Dipsy', sex: 'male' },
  ],
  'sex',
) // true
