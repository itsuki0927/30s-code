/**
 * 根据提供的映射函数，检查数组中的所有元素是否相等
 *
 * @param {any[]} arr 源数组
 * @param {(val:any) => any} 转换函数
 * @param {boolean}
 */
const allEqualBy = (arr, fn) => {
  const eql = fn(arr[0])
  return arr.every(item => fn(item) === eql)
}

// example
allEqualBy([1.1, 1.2, 1.3], Math.round) // true
allEqualBy([1.1, 1.3, 1.6], Math.round) // false
