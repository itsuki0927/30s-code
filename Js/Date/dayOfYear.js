// 返回该日期在一年中是第多少天
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)

// example
dayOfYear(new Date()) // 272
