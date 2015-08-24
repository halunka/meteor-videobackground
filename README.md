# meteor-videobackground - 0.0.6
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
    loop: 1,
    type: 'vimeo',
    volume: 0,
    aspectRatio: 1.8,
    autoSize: 1
  }
}, document.body)
```

You can also set a background image on the `videobackground` element. That will be shown as a poster, when the video doesn't render.
