/**
 * 将给定的数组简化为值哈希（键控数据存储）
 *
 * @param {any[]} object 源数组
 * @param {string} key 键
 * @returns {any}
 */
const toHash = (object, key) =>
  Array.prototype.reduce.call(
    object,
    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),
    {},
  )

// example
toHash([4, 3, 2, 1]) // { 0: 4, 1: 3, 2: 2, 3: 1 }
toHash([{ a: 'label' }], 'a') // { label: { a: 'label' } }
