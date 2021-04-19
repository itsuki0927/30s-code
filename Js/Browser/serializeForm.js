// 将一组表单元素编码为查询字符串
const serializeForm = form =>
  Array.from(new FormData(form), field =>
    field.map(encodeURIComponent).join('=')
  ).join('&')

// example
serializeForm(document.querySelector('#form'))
// email=test%40email.com&name=Test%20Name
