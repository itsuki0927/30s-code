/**
 * 计算两个或多个数字/数组的乘积
 *
 * @param {...number[]} arr 源数组
 * @returns {number} 乘积
 */
const prod = (...arr) => [...arr].reduce((acc, val) => acc * val, 1)

// example
prod(1, 2, 3, 4) // 24
prod(...[1, 2, 3, 4]) // 24
