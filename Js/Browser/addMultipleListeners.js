// 将具有相同处理程序的多个事件侦听器添加到元素
const addMultipleListeners = (el, types, listener, options, useCapture) => {
  types.forEach(type => el.addEventListener(type, listener, options, useCapture))
}

// example
addMultipleListeners(document.querySelector('.my-element'), ['click', 'mousedown'], () => {
  console.log('hello!')
})
