// 判断el是否有指定className类
const hasClass = (el, className) => el.classList.contains(className)

// example
hasClass(document.querySelector('p.special'), 'special') // true
