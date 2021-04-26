// 在给定元素上触发特定事件，可以选择传递自定义数据
const triggerEvent = (el, eventType, detail) =>
  el.dispatchEvent(new CustomEvent(eventType, { detail }))

// example
triggerEvent(document.getElementById('myId'), 'click')
triggerEvent(document.getElementById('myId'), 'click', { username: 'bob' })
