// 是否为 node 环境
const isNode = () =>
  typeof process !== 'undefined' &&
  !!process.versions &&
  !!process.versions.node

// example
isNode() // true (Node)
isNode() // false (browser)
