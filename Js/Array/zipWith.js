/*
 * 创建一个元素数组，根据原始数组中的位置分组，并使用一个函数指定分组后的值应该如何组合
 *
 * @param {...any[]} array 源数组
 * @return
 */
const zipWith = (...array) => {
  const fn = typeof array[array.length - 1] ? array.pop() : undefined
  return Array.from({ length: Math.max(...array.map(a => a.length)) }, (_, i) =>
    fn ? fn(...array.map(v => v[i])) : array.map(v => v[i]),
  )
}

// example
zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c) // [111, 222]
zipWith(
  [1, 2, 3],
  [10, 20],
  [100, 200],
  (a, b, c) => (a != null ? a : 'a') + (b != null ? b : 'b') + (c != null ? c : 'c'),
) // [111, 222, '3bc']
