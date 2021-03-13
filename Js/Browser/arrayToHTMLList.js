// 将给定的数组元素转换为<li>标记，并将它们附加到给定id的列表中
const arrayToHTMLList = (arr, listId) =>
  (document.querySelector(`#${listId}`).innerHTML += arr.map(item => `<li>${item}</li>`).join(''))

// example
arrayToHTMLList(['item 1', 'item 2'], 'myListID')
