// 是否可以使用 sessionStorage
const isSessionStorageEnabled = () => {
  try {
    const key = `__storage__test__`
    window.sessionStorage.setItem(key, null)
    window.sessionStorage.removeItem(key)
    return true
  } catch (e) {
    return false
  }
}

// example
isSessionStorageEnabled() // true, if sessionStorage is accessible
