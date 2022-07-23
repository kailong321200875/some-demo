<h1>画中画模式</h1>

观看视频网站或者直播中，经常会看到页面滚动之后，自动帮我们切换到画中画模式，实现这个也比较简单，javaScript已经有提供现成的api了。

# 开启画中画模式

```js
const video = document.getElementsByTagName('video')[0]
// 开启画中画模式
if (document.pictureInPictureEnabled && video) {
  video.requestPictureInPicture()
} else {
  alert('该浏览器不支持画中画')
}

```

# 关闭画中画模式

```js
const video = document.getElementsByTagName('video')[0]
// 开启画中画模式
if (document.pictureInPictureEnabled && video) {
  video.exitPictureInPicture()
} else {
  alert('该浏览器不支持画中画')
}

```

# 浏览器兼容性

[pictureInPictureEnabled](https://caniuse.com/?search=pictureInPictureEnabled)
