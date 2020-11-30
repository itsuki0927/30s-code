/**
 * 将给定的数组元素转换为<li>标记，并将它们附加到给定id的列表中
 *
 * @param {string[]} arr 源数组
 * @param {string} listId 元素id
 */
const arrayToHTMLList = (arr, listId) =>
  (document.querySelector(listId).innerHTML += arr.map(item => `<li>${item}</li>`).join(''))

// example
arrayToHTMLList(['item 1', 'item 2'], 'myListID')
