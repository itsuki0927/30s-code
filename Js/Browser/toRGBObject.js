// 将rgb（）颜色字符串转换为具有每种颜色值的对象
const toRGBObject = rgbStr => {
  const [red, green, blue] = rgbStr.match(/\d+/g).map(Number)
  return { red, green, blue }
}

// example
toRGBObject('rgb(255, 12, 0)') // {red: 255, green: 12, blue: 0}
