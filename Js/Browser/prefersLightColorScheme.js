// 检查用户配色方案是否为浅色
const prefersLightColorScheme = () =>
  window &&
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: light)').matches

// example
prefersLightColorScheme() // true
