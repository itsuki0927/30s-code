// 检查父元素是否包含子元素
const elementContains = (parent, child) => parent !== child && parent.contains(child)

// example
elementContains(document.querySelector('head'), document.querySelector('title'))
// true
elementContains(document.querySelector('body'), document.querySelector('body'))
// false
