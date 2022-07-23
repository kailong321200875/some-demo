import './pip.less'
import '@/styles/base.css'

const btn = document.querySelector('#open')
const closeBtn = document.querySelector('#close')

btn.addEventListener('click', function () {
  const video = document.getElementsByTagName('video')[0]
  // 开启画中画模式
  if (document.pictureInPictureEnabled && video) {
    video.requestPictureInPicture()
  } else {
    alert('该浏览器不支持画中画')
  }
})

closeBtn.addEventListener('click', function () {
  const video = document.getElementsByTagName('video')[0]
  // 关闭画中画模式
  if (document.pictureInPictureEnabled && video) {
    document.exitPictureInPicture()
  } else {
    alert('该浏览器不支持画中画')
  }
})
