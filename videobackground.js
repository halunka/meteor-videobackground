Template.videobackground.onRendered(function () {
  renderVideo(this.firstNode, _.extend(
    {
      loop: 1,
      type: 'vimeo',
      volume: 0,
      aspectRatio: 1.8,
      autoSize: 1
    },
    this.data)
  )
})
