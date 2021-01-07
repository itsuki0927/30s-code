/**
 * 删除数组中的元素，直到传递的函数返回true，返回数组中剩余的元素
 *
 * @param {any[]} arr 源数组
 * @param {(item:any) => boolean} func 过滤函数
 * @returns {any[]}
 */
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1)
  return arr
}

// example
dropWhile([1, 2, 3, 4], n => n >= 3) // [3, 4]
