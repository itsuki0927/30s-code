/**
 * 过滤掉非唯一值,并返回一个新数组
 *
 * @param {any[]} arr 源数组
 * @returns {any[]} 过滤后的数组
 */
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))

// example
const filterNonUniqueResult = filterNonUnique([1, 2, 2, 3, 4, 4, 5])
console.log('filterNonUniqueResult:', filterNonUniqueResult)
// [1,3,5]
