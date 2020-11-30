/**
 * 将二维数组转换为逗号分隔值（CSV）字符串
 *
 * @param {any[][]} arr 源数组
 * @param {string} limiter 分隔符
 * @returns {string}
 */
const arrayToCSV = (arr, limiter = ',') =>
  arr.map(v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(limiter)).join('\n')

// example
arrayToCSV([
  ['a', 'b'],
  ['c', 'd'],
])
// '"a","b"\n"c","d"'
arrayToCSV(
  [
    ['a', 'b'],
    ['c', 'd'],
  ],
  ';',
)
// '"a";"b"\n"c";"d"'
arrayToCSV([
  ['a', '"b" great'],
  ['c', 3.1415],
])
// '"a","""b"" great"\n"c",3.1415'
