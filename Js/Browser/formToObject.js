// 将一组表单元素编码为一个对象
const formToObject = form =>
  Array.from(new FormData(form)).reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {})

// example
formToObject(document.querySelector('#form'))
// { email: 'test@email.com', name: 'Test Name' }
