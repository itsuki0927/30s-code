// 将Cookie名称/值对序列化为Set-Cookie标头字符串
const serializeCookie = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`

// example
serializeCookie('foo', 'bar') // 'foo=bar'
