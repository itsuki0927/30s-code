/**
 * 将对象数组转换为仅包含指定列的逗号分隔值（CSV）字符串
 *
 * @param {any[]} arr 源数组
 * @param {string[]} columns 列数组
 * @param {string} delimiter 分隔符
 * @returns {string} CSV
 */
const JSONtoCSV = (arr, columns, delimiter = ',') =>
  [
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) => `${acc}${acc.length ? delimiter : ''}"${obj[key] ? obj[key] : ''}"`,
        '',
      ),
    ),
  ].join('\n')

// example
const jsonToCSVResult1 = JSONtoCSV(
  [{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }],
  ['a', 'b'],
)
console.log('jsonToCSVResult1:', jsonToCSVResult1)
// 'a,b\n"1","2"\n"3","4"\n"6",""\n"","7"'

const jsonToCSVResult2 = JSONtoCSV(
  [{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }],
  ['a', 'b'],
  ';',
)
console.log('jsonToCSVResult2:', jsonToCSVResult2)
// 'a;b\n"1";"2"\n"3";"4"\n"6";""\n"";"7"'
