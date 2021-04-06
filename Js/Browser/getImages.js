// 从一个元素中获取所有图像，并将它们放入一个数组中
const getImages = (el, includeDuplicates = false) => {
  const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'))
  return includeDuplicates ? images : [...new Set(images)]
}

// example
getImages(document, true) // ['image1.jpg', 'image2.png', 'image1.png', '...']
getImages(document, false) // ['image1.jpg', 'image2.png', '...']
