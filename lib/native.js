_renderVideo = _renderVideo || {}

_renderVideo.native = function (parent, options, err) {
  let vid = document.createElement('video')
  vid.poster = options.poster
  vid.className = 'videobackground__frame'
  vid.setAttribute('autoplay', 'true')
  vid.volume = options.volume
  if(options.loop) vid.setAttribute('loop', 'true')
  options.sources.forEach((el) => vid.appendChild(createSource.apply(null, el)))
  parent.appendChild(vid)
  return { element: vid }
}

function createSource (src, type) {
  return _.extend(
    document.createElement('source'),
    { src, type }
  )
}

