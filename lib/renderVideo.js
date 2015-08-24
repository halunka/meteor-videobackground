renderVideo = function renderVideo (parent, options) {
  var rendered = _renderVideo[options.type](parent, options)
  if(options.autoSize) {
    setSize(
      rendered.element,
      options.aspectRatio,
      (rendered.addedHeight || 0)
    )
    addEventListener(
      'resize',
      setSize.bind(
        null,
        rendered.element,
        options.aspectRatio,
        (rendered.addedHeight || 0)
      )
    )
  }
}

function setSize (element, ratio, addedHeight) {
  var parent = element.parentNode
  var clientHeight = parent.clientHeight + addedHeight
  var height
  var width
  if(
    parent.clientWidth / ratio >
    clientHeight
  ) {
    width = parent.clientWidth
    height = parent.clientWidth / ratio
  } else {
    width = clientHeight * ratio
    height = clientHeight
  }
  element.width = width + 'px'
  element.height = height + 'px'
  element.style.marginLeft = ['-', 'px'].join(Math.round(width / 2))
  element.style.marginTop = ['-', 'px'].join(Math.round((height - addedHeight) / 2))
}
