// 全屏模式打开或关闭元素
const fullscreen = (mode, el = 'body') =>
  mode ? document.querySelector(el).requestFullscreen() : document.exitFullscreen()

// example
fullscreen() // Opens `body` in fullscreen mode
fullscreen(false) // Exits fullscreen mode
