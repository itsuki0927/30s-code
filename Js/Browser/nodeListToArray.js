// nodeList 转化为 array
const nodeListToArray = nodeList => [...nodeList]

// example
nodeListToArray(document.childNodes) // [ <!DOCTYPE html>, html ]
