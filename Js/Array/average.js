/**
 * 返回两个或多个数字的平均值
 *
 * @param {...number[]} 源参数数组
 * @returns {number} 平均值
 */
const average = (...nums) =>
  nums.reduce((acc, val) => acc + val, 0) / nums.length;

// example
const averageResult1 = average(...[1, 2, 3]);
console.log("averageResult1: ", averageResult1);
// 2

const averageResult2 = average([1, 2, 3]);
console.log("averageResult2", averageResult2);
// 2
