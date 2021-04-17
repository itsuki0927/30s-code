// 检查用户配色方案是否为深色
const prefersDarkColorScheme = () =>
  window &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches

// example
prefersDarkColorScheme() // true
