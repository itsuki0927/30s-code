// 查看用户的首选语言
const detectLanguage = (defaultLang = 'en-US') =>
  navigator.language || Array.isArray(navigator.languages) ? navigator.languages[0] : defaultLang

// example
detectLanguage()
