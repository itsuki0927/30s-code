// 将调用该元素的元素平滑滚动到浏览器窗口的可见区域
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth',
  })

// example
smoothScroll('#fooBar') // scrolls smoothly to the element with the id fooBar
smoothScroll('.fooBar')
// scrolls smoothly to the first element with a class of fooBar
