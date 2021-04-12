// 是否为浏览器环境
const isBrowser = () => ![typeof window, typeof document].includes('undefined')

// example
isBrowser() // true (browser)
isBrowser() // false (Node)
