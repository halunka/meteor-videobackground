_renderVideo = _renderVideo || {}

_renderVideo.vimeo = function _renderVideoVimeo (parent, options) {
  var player_id = Mongo.ObjectID()
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
    parent.clientWidth,
    parent.clientHeight,
    player_id
  )
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
  vimeoElem.setAttribute('frameborder', 0)
  vimeoElem.id = id
  return vimeoElem
}
