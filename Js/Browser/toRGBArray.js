// 将rgb()颜色字符串转换为值数组
const toRGBArray = rgbStr => rgbStr.match(/\d+/g).map(Number)

// example
toRGBArray('rgb(255, 12, 0)') // [255, 12, 0]
