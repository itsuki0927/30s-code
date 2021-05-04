// 创建一个新的MutationObserver并为指定元素上的每个突变运行提供的回调
const observeMutations = (element, callback, options) => {
  const observer = new MutationObserver(mutations => mutations.forEach(m => callback(m)))

  observer.observe(
    element,
    Object.assign(
      {
        childList: true,
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        subtree: true,
      },
      options,
    ),
  )

  return observer
}

// example
const obs = observeMutations(document, console.log)
// Logs all mutations that happen on the page
obs.disconnect()
// Disconnects the observer and stops logging mutations on the page
