_renderVideo = _renderVideo || {}

_renderVideo.vimeo = function _renderVideoVimeo (parent, options) {
  var player_id = options.id + (new Date()).getTime()
  var params = {
    loop: options.loop,
    title: 0,
    badge: 0,
    byline: 0,
    portrait: 0,
    api: 1,
    player_id: player_id
  }

  renderVimeoElem(
    parent,
    [
      '//player.vimeo.com/video/',
      options.id,
      uriEncodeObj(params)
    ].join(''),
    player_id
  )
}

function renderVimeoElem (parent, url, player_id) {
  var elem = document.createElement('iframe')
  elem.src = url
  elem.className = 'videobackground__frame'
  elem.setAttribute('frameborder', 0)
  elem.id = player_id

  elem.style.display = 'none'
  parent.appendChild(elem)
  elem.addEventListener('load', function () {
    callAPI('setVolume', self.volume)
    callAPI('play')
    setTimeout(function () { elem.style.display = 'block' },0)
  })
  window.addEventListener('message', function (e) {
    event = JSON.parse(e.data).event
    if(event === 'error')
      parent.removeChild(elem)
  })
  return {
    element: elem,
    addedHeight: 54
  }
}

function callAPI (elem, method, value) {
  elem.contentWindow.postMessage(JSON.stringify({
    method: method,
    value: value
  }), '*')
}
