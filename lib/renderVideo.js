renderVideo = function renderVideo (parent, options) {
  var rendered = _renderVideo[options.type](parent, options)
  if(options.autoSize) {
    setSize(
      rendered.element,
      options.aspectRatio,
      (rendered.addedHeight || 0)
    )
    addEventListener('resize', self.updateStyles.bind(self))
  }
}

function setSize (element, ratio, addedHeight) {
  var clientHeight = element.parent.clientHeight + addedHeight
  var height
  var width
  if(
    element.parent.clientWidth / ratio >
    clientHeight
  ) {
    width = element.parent.clientWidth
    height = element.parent.clientWidth / ratio
  } else {
    width = clientHeight * ratio
    height = clientHeight
  }
  elem.width = width + 'px'
  elem.height = height + 'px'
  elem.style.marginLeft = ['-', 'px'].join(Math.round(width / 2))
  elem.style.marginTop = ['-', 'px'].join(Math.round((height - addedHeight) / 2))
}
