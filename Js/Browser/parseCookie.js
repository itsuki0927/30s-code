// cookie字符串转换为对象
const parseCookie = str =>
  str
    .split(';')
    .map(item => item.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())
      return acc
    }, {})

// example
parseCookie('foo=bar; equation=E%3Dmc%5E2')
// { foo: 'bar', equation: 'E=mc^2' }
