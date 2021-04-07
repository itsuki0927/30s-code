// 返回一个包含给定元素的所有兄弟元素的数组
const getSiblings = el =>
  [...el.parentNode.childNodes].filter(node => node !== el)

// example
getSiblings(document.querySelector('head')) // ['body']
