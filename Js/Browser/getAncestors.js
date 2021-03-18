// 返回从文档根到给定元素的元素的所有祖先
const getAncestors = el => {
  const ancestors = []
  while (el) {
    ancestors.unshift(el)
    el = el.parentNode
  }
  return ancestors
}

// example
getAncestors(document.querySelector('listId'))
