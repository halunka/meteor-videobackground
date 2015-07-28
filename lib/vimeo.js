_renderVideo = _renderVideo || {}

_renderVideo.vimeo = function _renderVideoVimeo (parent, options) {
  var params = {
    autoplay: 1,
    loop: options.loop,
    title: 0,
    badge: 0,
    byline: 0
  }
  var elem = createVimeoElement(
    [
      '//player.vimeo.com/video/',
      options.id,
      uriEncodeObj(params)
    ].join(''),
    parent.clientWidth,
    parent.clientHeight
  )
  parent.appendChild(elem)
}

function createVimeoElement (url, width, height) {
  var vimeoElem = document.createElement('iframe')
  vimeoElem.src = url
  vimeoElem.width = width
  vimeoElem.height = height
  vimeoElem.setAttribute('frameborder', 0)
  return vimeoElem
}
