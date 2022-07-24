import './magnifier.less'
import '@/styles/base.css'

window.onload = function () {
  const wrap = document.querySelector('.wrap')
  const smallBox = document.querySelector('.small-box')
  const smallImg = document.querySelector('.small-img')
  const moveBox = document.querySelector('.move-box')

  const bigBox = document.querySelector('.big-box')
  const bigImg = document.querySelector('.big-img')

  // 鼠标移入事件
  smallImg.onmouseover = function () {
    moveBox.style.display = 'block'
    bigBox.style.display = 'block'
  }

  // 鼠标移出事件
  smallImg.onmouseout = function () {
    moveBox.style.display = 'none'
    bigBox.style.display = 'none'
  }

  // 移动事件
  smallImg.onmousemove = function (e) {
    let left = e.clientX - wrap.offsetLeft - moveBox.offsetWidth / 2
    let top = e.clientY - wrap.offsetTop - moveBox.offsetHeight / 2

    if (left < 0) {
      left = 0
    } else if (left > smallBox.offsetWidth - moveBox.offsetWidth) {
      left = smallBox.offsetWidth - moveBox.offsetWidth
    }

    if (top < 0) {
      top = 0
    } else if (top > smallBox.offsetHeight - moveBox.offsetHeight) {
      top = smallBox.offsetHeight - moveBox.offsetHeight
    }

    // 放大镜位置
    moveBox.style.left = left + 'px'
    moveBox.style.top = top + 'px'

    // 计算百分比
    const percentX = left / (smallBox.offsetWidth - moveBox.offsetWidth)
    const percentY = top / (smallBox.offsetHeight - moveBox.offsetHeight)

    // 计算大图位置
    bigImg.style.left = -percentX * (bigImg.offsetWidth - bigBox.offsetWidth) + 'px'
    bigImg.style.top = -percentY * (bigImg.offsetHeight - bigBox.offsetHeight) + 'px'
  }
}
