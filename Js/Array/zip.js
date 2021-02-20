/*
 * 创建一个元素数组，根据元素在原始数组中的位置进行分组
 *
 * @param {...any[]} arrays 源数组
 * @return {any[][]}
 */
const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(v => v.length))
  return Array.from({ length: maxLength }).map((_, i) =>
    Array.from({ length: arrays.length }, (_, k) => arrays[k][i]),
  )
}

// example
zip(['a', 'b'], [1, 2], [true, false]) // [['a', 1, true], ['b', 2, false]]
zip(['a'], [1, 2], [true, false]) // [['a', 1, true], [undefined, 2, false]]
