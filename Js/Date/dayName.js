// 从Date对象获取工作日的名称
const dayName = (date, locale) => date.toLocaleDateString(locale, { weekday: 'long' })

// example
dayName(new Date()) // 'Saturday'
dayName(new Date('09/23/2020'), 'de-DE') // 'Samstag'
