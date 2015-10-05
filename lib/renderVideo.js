renderVideo = function renderVideo (parent, options) {
  var rendered
  var poster = document.getElementsByClassName('videobackground__poster')[0]
  function hidePoster () {
    poster.className += ' videobackground__poster--hidden'
  }
  poster.style.backgroundImage = `url(${options.poster})` || ''

  rendered = _renderVideo[options.type](parent, options)
  rendered.element.addEventListener('load', hidePoster)
  if(options.autoSize) {
    var resize = setSize.bind(
      null,
      rendered.element,
      options.aspectRatio,
      (rendered.cutOff || [0, 0])
    )
    resize()
    addEventListener('resize', resize)
  }
}

function setSize (element, ratio, cutOff) {
  var parent = element.parentNode
  var clientHeight = parent.clientHeight + cutOff[0]
  var clientWidth = parent.clientWidth + cutOff[1]
  var height
  var width
  if(
    clientWidth / ratio >
    clientHeight
  ) {
    width = clientWidth
    height = clientWidth / ratio
  } else {
    width = clientHeight * ratio
    height = clientHeight
  }
  element.width = width + 'px'
  element.height = height + 'px'
  element.style.marginTop = ['-', 'px'].join(Math.round((height - cutOff[0]) / 2))
  element.style.marginLeft = ['-', 'px'].join(Math.round((width - cutOff[1]) / 2))
}


