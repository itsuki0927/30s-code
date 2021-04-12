// 是否为绝对路径
const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str)

// example
isAbsoluteURL('https://google.com') // true
isAbsoluteURL('ftp://www.myserver.net') // true
isAbsoluteURL('/foo/bar') // falsee
