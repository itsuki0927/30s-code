// 返回宽度大于视口宽度的HTML元素数组
const getElementsBiggerThanViewport = () => {
  const docWidth = document.documentElement.offsetWidth
  return [...document.querySelectorAll('*')].filter(el => el.offsetWidth > docWidth)
}

// example
getElementsBiggerThanViewport() // <div id="ultra-wide-item" />
