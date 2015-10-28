_renderVideo = _renderVideo || {}

_renderVideo.native = function (parent, options, err) {
  let vid = document.createElement('video')
  vid.poster = options.poster
  vid.className = 'videobackground__frame'
  vid.autoplay = 'true'
  if(options.loop) vid.loop = 'true'
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

