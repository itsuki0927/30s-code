// 在指定元素的前面插入HTML字符串
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString)

// example
insertBefore(document.getElementById('myId'), '<p>before</p>')
// <p>before</p> <div id="myId">...</div>
