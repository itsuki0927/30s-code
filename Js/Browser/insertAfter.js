// 在指定元素的末尾插入HTML字符串
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString)

// example
insertAfter(document.getElementById('myId'), '<p>after</p>')
// <div id="myId">...</div> <p>after</p>
