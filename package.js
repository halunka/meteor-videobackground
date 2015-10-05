Package.describe({
  name: 'halunka:videobackground',
  summary: 'A package that makes it easy to render those fancy background videos into your templates.',
  version: '0.0.14',
  git: 'https://github.com/halunka/meteor-videobackground',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2')
  api.use(['underscore', 'underscore', 'templating', 'mongo'], 'client')
  api.addFiles(
    [
      'videobackground.html',
      'videobackground.css'
    ],
    'client'
  )
  api.addFiles(
    [
      'lib/utils.js',
      'lib/vimeo.js',
      'lib/renderVideo.js',
      'videobackground.js'
    ],
    'client'
  )
})
