// 移除dom节点
const removeElement = el => el.parentNode.removeChild(el)

// example
removeElement(document.querySelector('#my-element'))
// Removes #my-element from the DOM
