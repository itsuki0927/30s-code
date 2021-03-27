// 显示指定的所有元素
const show = (...el) => [...el].forEach(el => (el.style.display = ''))

// example
show(...document.querySelectorAll('img'))
// Shows all <img> elements on the page
