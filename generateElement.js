const generateElement = (tagName, attributes={}) => {
  let element = document.createElement(tagName)
  if (Object.keys(attributes).length>0) {
    let keys = Object.keys(attributes)
    keys.forEach( item => {
      if (item != "textNode") {
        let attr = document.createAttribute(item)
        attr.value = attributes[item]
        element.setAttributeNode(attr)
      }
    })
    if (attributes.textNode) {
      let textNode = document.createTextNode(attributes["textNode"])
      element.appendChild(textNode)
    }
  }
  return element
}
