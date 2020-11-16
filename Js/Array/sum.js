/**
 * 计算两个或多个数字/数组的总和
 *
 * @param {number[]} arr 源数据
 * @returns {number} 结果
 */
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0)

// example
sum(1, 2, 3, 4) // 10
sum(...[1, 2, 3, 4]) // 10
