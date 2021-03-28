// 将hsl（）颜色字符串转换为值数组
const toHSLArray = hslStr => hslStr.match(/\d+/g).map(Number)

// example
toHSLArray('hsl(50, 10%, 10%)') // [50, 10, 10]
