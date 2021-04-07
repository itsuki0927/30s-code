// 返回当前页面的滚动位置
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
})

// example
getScrollPosition() // {x: 0, y: 200}
