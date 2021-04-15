// 每当用户单击指定元素之外时，运行回调
const onClickOutside = (element, callback) => {
  document.addEventListener('click', e => {
    if (!element.contains(e.target)) callback()
  })
}

// example
onClickOutside('#my-element', () => console.log('Hello'))
// Will log 'Hello' whenever the user clicks outside of #my-element
