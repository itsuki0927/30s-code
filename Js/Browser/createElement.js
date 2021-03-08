// 创建元素
const createElement = str => {
  const el = document.createElement('div')
  el.innerHTML = str
  return el.firstElementChild
}

// example
const el = createElement(
  `<div class="container">
    <p>Hello!</p>
  </div>`,
)
console.log(el.className) // 'container'
