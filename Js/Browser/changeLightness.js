// 更改hsl（）颜色字符串的亮度值
const changeLightness = (delta, hslStr) => {
  const [hue, saturation, lightness] = hslStr.match(/\d+/g).map(Number)

  const newLightness = Math.max(0, Math.min(100, lightness + parseFloat(delta)))

  return `hsl(${hue}, ${saturation}%, ${newLightness}%)`
}

// example
changeLightness(10, 'hsl(330, 50%, 50%)') // 'hsl(330, 50%, 60%)'
changeLightness(-10, 'hsl(330, 50%, 50%)') // 'hsl(330, 50%, 40%)'
