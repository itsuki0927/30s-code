/**
 * 删除数组中的元素，直到传递的函数返回true。 返回移除的元素
 *
 * @param {number[]} arr 源数组
 * @param {(item:number) => boolean} 传递函数
 * @returns {number[]}
 */
const takeUntil = (arr, fn) => {
  for (const [i, val] of arr.entries()) if (fn(val)) return arr.slice(0, i)
  return arr
}

// example
takeUntil([1, 2, 3, 4], n => n >= 3) // [1, 2]
