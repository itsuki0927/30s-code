// 滚动事件停止后执行回调函数
const onScrollStop = callback => {
  let isScrolling
  window.addEventListener(
    'scroll',
    e => {
      clearTimeout(isScrolling)
      isScrolling = setTimeout(() => {
        callback(e)
      }, 150)
    },
    false
  )
}

// example
onScrollStop(() => {
  console.log('The user has stopped scrolling')
})
