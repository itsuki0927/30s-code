/**
 * 将属性与值，给定的有效属性标识符数组和值数组相关联
 *
 * @param {string[]} props key数组
 * @param {any[]} values values数组
 * @returns {Object}
 */
const zipObject = (props, values) =>
  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {})

// example
zipObject(['a', 'b', 'c'], [1, 2]) // {a: 1, b: 2, c: undefined}
zipObject(['a', 'b'], [1, 2, 3]) // {a: 1, b: 2}
