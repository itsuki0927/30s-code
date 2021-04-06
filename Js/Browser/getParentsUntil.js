// 查找元素的所有祖先，直到该元素与指定选择器匹配为止
const getParentsUntil = (el, selector) => {
  let parents = [],
    _el = el.parentNode

  while (_el && _el.matches === 'function') {
    parents.unshift(_el)
    if (_el.matches(selector)) return parents
    else _el = _el.parentNode
  }
  return []
}

// example
getParentsUntil(document.querySelector('#home-link'), 'header')
// [header, nav, ul, li]
