// 获取基本路径
const getBaseURL = url => url.replace(/[?&].*$/, '')

// example
getBaseURL('http://url.com/page?name=Adam&surname=Smith')
// 'http://url.com/page'
