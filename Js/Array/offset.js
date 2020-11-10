/**
 * 将指定数量的元素移动到数组的末尾
 *
 * @param {any[]} arr 源数组
 * @param {number} offset 偏移
 * @returns {any[]} 偏移后的数组
 */
const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)]

// example
offset([1, 2, 3, 4, 5], 2) // [3, 4, 5, 1, 2]
offset([1, 2, 3, 4, 5], -2) // [4,5,1,2,3]
