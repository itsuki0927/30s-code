/*
 * 从数组中获取随机元素
 *
 * @param {any[]} arr 源数组
 * @returns {any} 数组的某一项
 */
const sample = arr => arr[Math.floor(Math.random() * arr.length)]

// example
sample([3, 7, 9, 11]) // 3
