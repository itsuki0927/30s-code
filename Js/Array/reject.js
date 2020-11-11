/**
 * 根据谓词函数过滤数组的值，仅返回谓词函数返回false的值
 *
 * @param {(...args)=>boolean} 谓词函数
 * @param {any[]} 源数组
 * @returns {any[]}
 */
const reject = (pred, array) => array.filter((...args) => !pred(...args))

// example
reject(x => x % 2 === 0, [1, 2, 3, 4, 5]) // [1,3,5]
reject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']) // ['Pear','Kiwi']
