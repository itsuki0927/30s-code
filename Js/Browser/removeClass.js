// 移除指定className
const removeClass = (el, className) => el.classList.remove(className)

// example
removeClass(document.querySelector('p.special'), 'special')
