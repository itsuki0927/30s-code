/**
 * 将逗号分隔值（CSV）字符串转换为2D数组
 *
 * @param {string} data 源数据
 * @param {string} delimiter 分隔符
 * @param {boolean} omitFirstRow 是否过滤第一行
 * @returns {string[][]}
 */
const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') : 0)
    .split('\n')
    .map(item => item.split(delimiter))

// example
CSVToArray('a,b\nc,d') // [['a', 'b'], ['c', 'd']];
CSVToArray('a;b\nc;d', ';') // [['a', 'b'], ['c', 'd']];
CSVToArray('col1,col2\na,b\nc,d', ',', true) // [['a', 'b'], ['c', 'd']];
