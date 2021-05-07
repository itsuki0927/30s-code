// 在指定的DOM元素中呈现给定的DOM树
const renderElement = ({ type, props = {} }, container) => {
  const isTextElement = !type
  const element = isTextElement ? document.createTextNode('') : document.createElement(type)

  const isListener = p => p.startsWith('on')
  const isAttribute = p => !isListener(p) && p !== 'children'

  Object.keys(props).forEach(p => {
    if (isAttribute(p)) element[p] = props[p]
    if (!isTextElement && isListener(p)) {
      element.addEventListener(p.toLowerCase().slice(2), props[p])
    }
  })

  if (!isTextElement && props.children && props.children.length) {
    props.children.forEach(child => renderElement(child, element))
  }

  container.appendChild(element)
}

// example
const myElement = {
  type: 'button',
  props: {
    type: 'button',
    className: 'btn',
    onClick: () => alert('Clicked'),
    children: [{ props: { nodeValue: 'Click me' } }],
  },
}

renderElement(myElement, document.body)
