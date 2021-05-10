// 以字符串形式计算从今天起n天的日期
const daysFromNow = n => {
  const now = new Date()
  now.setDate(now.getDate() + Math.abs(n))
  return now.toISOString().split('T')[0]
}

// example
daysFromNow(5) // 2021-05-15 (if current date is 2021-05-15)
