// 切换HTML元素的class
const toggleClass = (el, className) => el.classList.toggle(className)

// example
toggleClass(document.querySelector('p.special'), 'special')
// The paragraph will not have the 'special' class anymore
