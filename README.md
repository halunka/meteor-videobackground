# meteor-videobackground - 0.1.2
A package that makes it easy to render those fancy background videos into your templates.

## Usage

`template`
```
{{ > videobackground vbgOptions }}
```

`renderFunction`
```js
Blaze.renderWithData('template', {
  vbgOptions: {
    id: '140850530', // for https://vimeo.com/channels/staffpicks/140850530
    loop: 1,
    type: 'vimeo',
    volume: 0,
    poster: '/img/poster.jpg', // An image inside your public folder
    aspectRatio: 1.8,
    autoSize: 1
  }
}, document.body)
```

You can also set a background image on the `videobackground` element. That will be shown as a poster, when the video doesn't render. All options except for `ìd` are optional.
