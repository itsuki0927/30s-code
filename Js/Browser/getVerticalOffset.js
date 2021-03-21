// 查找从给定元素到文档顶部的距离
const getVerticalOffset = el => {
  let offset = el.offsetTop
  _el = el
  while (_el.offsetParent) {
    _el = _el.offsetParent
    offset += _el.offsetTop
  }
  return offset
}

// example
getVerticalOffset('.my-element') // 120
