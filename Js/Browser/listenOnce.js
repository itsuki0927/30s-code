// 将事件侦听器添加到仅在首次触发事件时才运行回调的元素
const listenOnce = (el, evt, fn) => el.addEventListener(evt, fn, { once: true })

// example
listenOnce(document.getElementById('my-id'), 'click', () => console.log('Hello world')) // 'Hello world' will only be logged on the first click
