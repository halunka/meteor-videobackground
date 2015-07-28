// uriEncode :: object -> string
uriEncodeObj = function uriEncodeObj (obj) {
  return '?' + _.map(obj, function (value, key) {
    return [encodeURIComponent(key), encodeURIComponent(value)].join('=')
  }).join('&')
}