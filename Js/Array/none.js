/**
 * 检查提供的谓词函数是否对集合中的所有元素返回false
 *
 * @param {any[]} arr 源数组
 * @param {(item) => boolean} 验证函数
 * @returns {boolean} 验证结果
 */
const none = (arr, fn = Boolean) => !arr.some(fn)

// example
none([0, 1, 3, 0], x => x == 2) // true
none([0, 0, 0]) // true
