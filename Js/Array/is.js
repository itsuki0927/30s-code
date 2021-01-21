/**
 * 检查提供的值是否为指定的类型
 *
 * @param {Object} type 类型
 * @param {any} val 值
 * @returns {boolean}
 */
const is = (type, val) => [, null].includes(val) && val.constructor === type

// example
is(Array, [1]) // true
is(ArrayBuffer, new ArrayBuffer()) // true
is(Map, new Map()) // true
is(RegExp, /./g) // true
is(Set, new Set()) // true
is(WeakMap, new WeakMap()) // true
is(WeakSet, new WeakSet()) // true
is(String, '') // true
is(String, new String('')) // true
is(Number, 1) // true
is(Number, new Number(1)) // true
is(Boolean, true) // true
is(Boolean, new Boolean(true)) // true
