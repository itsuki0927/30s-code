// 将提供的样式添加到给定的元素
const addStyles = (el, styles) => Object.assign(el.style, styles)

// example
addStyles(document.getElementById('my-element'), {
  background: 'red',
  color: '#ffff00',
  fontSize: '3rem',
})
