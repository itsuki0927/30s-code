// 是否可以使用 localStorage
const isLocalStorageEnabled = () => {
  try {
    const key = '__storage__test__'
    window.localStorage.setItem(key, true)
    window.localStorage.removeItem(key)
    return true
  } catch (e) {
    return false
  }
}

// example
isLocalStorageEnabled() // true, if localStorage is accessible
