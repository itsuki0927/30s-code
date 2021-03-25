// 重定向
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url)

// example
redirect('https://google.com')
