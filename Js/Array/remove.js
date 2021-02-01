/**
 * 通过删除给定函数返回false的元素来改变数组
 *
 * @param {number[]} arr 源数组
 * @param {(item:number,index:number,arr:number[]) => boolean} func 过滤函数
 * @returns
 */
const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1)
        return acc.concat(val)
      }, [])
    : []

// example
remove([1, 2, 3, 4], n => n % 2 === 0) // [2, 4]
