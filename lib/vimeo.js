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
  var vimeoElem = Object.create(VimeoElem)
  vimeoElem.setOptions({
    url:
      [
        '//player.vimeo.com/video/',
        options.id,
        uriEncodeObj(params)
      ].join(''),
    player_id: player_id,
    parent: parent,
    ratio: options.aspectRatio,
    volume: options.volume,
    autoSize: true,
    posterTimeout: options.posterTimeout
  })
  vimeoElem.initializeElem()
}


var VimeoElem = {
  setOptions: function setOptions (options) {
    _.extend(this, options)
  },

  initializeElem: function () {
    var self = this
    var removeTimer = setTimeout(function () {
      self.parent.removeChild(self.elem)
    }, self.posterTimeout)
    self.renderHTML()
    if(self.autoSize) {
      self.updateStyles()
      addEventListener('resize', self.updateStyles.bind(self))
    }
    self.parent.appendChild(self.elem)
    self.elem.addEventListener('load', function () {
      self.callAPI('setVolume', self.volume)
      self.callAPI('play')
    })
    window.addEventListener('message', function (e) {
      clearTimeout(removeTimer)
    })
  },

  controlsHeight: 54,

  renderHTML: function createVimeoElement () {
    this.elem = document.createElement('iframe')
    this.elem.src = this.url
    this.elem.className = 'videobackground__frame'
    this.elem.setAttribute('frameborder', 0)
    this.elem.id = this.player_id
  },

  setSize: function setSize () {
    var clientHeight = this.parent.clientHeight + this.controlsHeight
    if(
      this.parent.clientWidth / this.ratio >
      clientHeight
    ) {
      this.width = this.parent.clientWidth
      this.height = this.parent.clientWidth / this.ratio
    } else {
      this.width = clientHeight * this.ratio
      this.height = clientHeight
    }
  },

  updateStyles: function updateStyles () {
    this.setSize()
    this.elem.width = this.width + 'px'
    this.elem.height = this.height + 'px'
    this.elem.style.marginLeft = ['-', 'px'].join(Math.round(this.width / 2))
    this.elem.style.marginTop = ['-', 'px'].join(Math.round((this.height - this.controlsHeight) / 2))
  },

  callAPI: function callAPI (method, value) {
    this.elem.contentWindow.postMessage(JSON.stringify({
      method: method,
      value: value
    }), '*')
  }
}
