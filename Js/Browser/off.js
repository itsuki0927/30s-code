// 从元素中移除事件侦听器
const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts)

// example
const fn = () => console.log('!')
document.body.addEventListener('click', fn)
off(document.body, 'click', fn) // no longer logs '!' upon clicking on the page
