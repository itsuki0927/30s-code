// 检查页面底部是否可见
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight)

// example
bottomVisible() // true
