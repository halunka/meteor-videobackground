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

  return renderVimeoElem(
    parent,
    [
      '//player.vimeo.com/video/',
      options.id,
      uriEncodeObj(params)
    ].join(''),
    player_id,
    options.volume,
    options.timeout
  )
}

function renderVimeoElem (parent, url, player_id, volume, timeout) {
  var elem = document.createElement('iframe')
  elem.src = url
  elem.className = 'videobackground__frame'
  elem.setAttribute('frameborder', 0)
  elem.id = player_id

  parent.appendChild(elem)
  elem.addEventListener('load', function () {
    callAPI(elem, 'setVolume', volume)
    callAPI(elem, 'play')
  })
  window.addEventListener('message', function (e) {
    event = JSON.parse(e.data).event
    if(event === 'error')
      parent.removeChild(elem)
  })
  return {
    element: elem,
    cutOff: [54, 50]
  }
}

function callAPI (elem, method, value) {
  elem.contentWindow.postMessage(JSON.stringify({
    method: method,
    value: value
  }), '*')
}
