Template.videobackground.onRendered(function () {
  renderVideo(this.firstNode, _.extend(
    {
      loop: 1,
      type: 'vimeo'
    },
    this.data)
  )
})
