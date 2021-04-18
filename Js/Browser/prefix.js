// 基于当前浏览器的CSS属性的前缀
const prefix = prop => {
  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1)
  const prefixes = ['', 'webkit', 'moz', 'ms', 'o']
  const index = prefixes.findIndex(
    prefix =>
      typeof document.body.style[prefix ? prefix + capitalizedProp : prop] !==
      'undefined'
  )
  return index !== -1
    ? index === 0
      ? prop
      : prefixes[index] + capitalizedProp
    : null
}

// example
prefix('appearance')
// 'appearance' on a supported browser, otherwise 'webkitAppearance', 'mozAppearance', 'msAppearance' or 'oAppearance'
