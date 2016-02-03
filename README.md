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

Here's an example adapting the default app:

`main.html`

```
<head>
  <title>test</title>
</head>

<body>
  <h1>Welcome to Meteor!</h1>
  {{ > hello }}
</body>

<template name="hello">
  {{ > videobackground vbgOptions }}
</template>
```

`main.js`

```
if (Meteor.isClient) {
  Template.hello.helpers({
    vbgOptions () { return {
      id: '153902405', // for https://vimeo.com/channels/staffpicks/140850530
      type: 'vimeo',
      poster: '/img/poster.jpg', // An image inside your public folder
      aspectRatio: 1.8,
    }}
  });
}
```

