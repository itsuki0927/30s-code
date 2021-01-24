/**
 * 将数组的所有元素连接到字符串中并返回此字符串。 使用分隔符和结尾分隔符
 *
 * @param {string[]} arr 源数组
 * @param {string} separator 分隔符
 * @param {string} end 结束符
 * @returns {string} 字符串
 */
const join = (arr, separator = ',', end = separator) =>
  arr.reduce(
    (acc, val, i) =>
      i === arr.length - 2
        ? acc + val + end
        : i === arr.length - 1
        ? acc + val
        : acc + val + separator,
    '',
  )

// example
join(['pen', 'pineapple', 'apple', 'pen'], ',', '&') // 'pen,pineapple,apple&pen'
join(['pen', 'pineapple', 'apple', 'pen'], ',') // 'pen,pineapple,apple,pen'
join(['pen', 'pineapple', 'apple', 'pen']) // 'pen,pineapple,apple,pen'
