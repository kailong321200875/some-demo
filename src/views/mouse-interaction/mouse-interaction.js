import './mouse-interaction.less'
import '@/styles/base.css'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const WIDTH = (canvas.width = document.documentElement.clientWidth)
const HEIGHT = (canvas.height = document.documentElement.clientHeight)
const para = {
  num: 100,
  color: false, // 颜色，如果是false 则是随机渐变颜色
  r: 0.9, // 圆每次增加的半径
  o: 0.09, // 判断圆消失的条件，数值越大，消失的越快
  a: 1
}
let color = ''
let color2 = ''
const round_arr = [] // 存放圆的数组

window.onmousemove = function (event) {
  const mouseX = event.clientX
  const mouseY = event.clientY

  round_arr.push({
    mouseX: mouseX,
    mouseY: mouseY,
    r: para.r, // 设置半径每次增大的数值
    o: 1 //  判断圆消失的条件，数值越大，消失得越快
  })
}

// 判断参数中是否设置了 color，如果设置了 color，就使用该值、
// 如果参数中的 color 为 false，那么就使用随机的颜色
if (para.color) {
  color2 = para.color
} else {
  color = Math.random() * 360
}

function animate() {
  if (!para.color) {
    color += 0.1
    color2 = 'hsl(' + color + ',100%,80%)'
  }

  ctx.clearRect(0, 0, WIDTH, HEIGHT)

  for (var i = 0; i < round_arr.length; i++) {
    ctx.fillStyle = color2
    ctx.beginPath()
    ctx.arc(round_arr[i].mouseX, round_arr[i].mouseY, round_arr[i].r, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
    round_arr[i].r += para.r
    round_arr[i].o -= para.o

    if (round_arr[i].o <= 0) {
      round_arr.splice(i, 1)
      i--
    }
  }

  window.requestAnimationFrame(animate)
}

animate()
