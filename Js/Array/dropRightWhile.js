/**
 * 从数组末尾删除元素，直到传递的函数返回true，返回数组中剩余的元素
 *
 * @param {any[]} arr 源数组
 * @param {(item:any) => boolean} 过滤函数
 * @returns {any[]}
 */
const droprightwhile = (arr, func) => {
  let rightindex = arr.length
  while (rightindex-- && !func(arr[rightindex]));
  return arr.slice(0, rightindex + 1)
}

// example
droprightwhile([1, 2, 3, 4], n => n < 3) // [1, 2]
