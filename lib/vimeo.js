_renderVideo = _renderVideo || {}

_renderVideo.vimeo = function _renderVideoVimeo (parent, options) {
  var player_id = options.id + (new Date()).getTime()
  var width = parent.clientHeight * options.aspectRatio
  var params = {
    loop: options.loop,
    title: 0,
    badge: 0,
    byline: 0,
    portrait: 0,
    api: 1,
    player_id: player_id
  }
  var elem = createVimeoElement(
    [
      '//player.vimeo.com/video/',
      options.id,
      uriEncodeObj(params)
    ].join(''),
    width,
    parent.clientHeight,
    player_id
  )
  if(options.autoWidth) {
    adaptMargin(elem, width)
    addEventListener('resize', adaptMargin.bind(elem), width)
  }
  parent.appendChild(elem)
  elem.call = callAPI
  elem.addEventListener('load', function () {
    elem.call('setVolume', options.volume)
    elem.call('play')
  })
}

function callAPI (method, value) {
  this.contentWindow.postMessage(JSON.stringify({
    method: method,
    value: value
  }), '*')
}

function createVimeoElement (url, width, height, id) {
  var vimeoElem = document.createElement('iframe')
  vimeoElem.src = url
  vimeoElem.width = width
  vimeoElem.height = height
  vimeoElem.className = 'videobackground__frame'
  vimeoElem.setAttribute('frameborder', 0)
  vimeoElem.id = id
  return vimeoElem
}

function adaptMargin (elem, width) {
  elem.style.marginLeft = ['-', 'px'].join(width / 2)
}
