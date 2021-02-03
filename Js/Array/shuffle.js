/**
 * 数组乱序
 *
 * @param {number[]} arr 源数组
 * @returns {number[]}
 */
const shuffle = ([...arr]) => {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    ;[arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr
}

//
const foo = [1, 2, 3]
shuffle(foo) // [2, 3, 1], foo = [1, 2, 3]
