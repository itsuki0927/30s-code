// 是否支持touch事件
const supportsTouchEvents = () => window && 'ontouchstart' in window

// example
supportsTouchEvents() // true
