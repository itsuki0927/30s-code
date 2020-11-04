/**
 * 类数组->数组
 *
 * @param {any[]} nodeList 类数组
 * @returns {any[]} 数组
 */
const nodeListToArray = nodeList => [...nodeList]

// example
nodeListToArray(document.childNodes) // [ <!DOCTYPE html>, html ]
