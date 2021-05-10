// 计算从今天起n天前的日期，以字符串表示形式
const daysAgo = n => {
  const now = new Date()
  now.setDate(now.getDate() - Math.abs(n))
  return now.toISOString().split('T')[0]
}

// example
daysAgo(20) // 2020-04-20 (if current date is 2021-05-11)
