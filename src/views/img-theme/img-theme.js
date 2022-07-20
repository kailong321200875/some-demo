import './img-theme.less'
import '@/styles/base.css'

const btn = document.querySelector('#submit')
btn.addEventListener('click', () => {
  // 获取input的值
  const input = document.querySelector('#input')
  const value = input.value
  if (
    value.match(/^(http|https):\/\/.*\.(jpg|png|jpeg)$/) ||
    value.indexOf('data:image/') === 0 ||
    !value
  ) {
    // 获取图片主题色
    getImgThemeColor(value)
    const img = document.querySelector('#img')
    img.src = value || require('@/assets/imgs/bg.jpeg')
  } else {
    alert('请输入正确的图片地址')
  }
})

// 提取图片主题色
function getImgThemeColor(url) {
  const img = document.createElement('img')
  img.src = url || require('@/assets/imgs/bg.jpeg')
  img.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)

    // 获取像素数据
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data

    let r = 0
    let g = 0
    let b = 0

    // 取所有像素平均值
    for (let row = 0; row < canvas.height; row++) {
      for (let col = 0; col < canvas.width; col++) {
        const i = (row * canvas.width + col) * 4
        r += data[i]
        g += data[i + 1]
        b += data[i + 2]
      }
    }

    // 计算平均值
    r /= canvas.width * canvas.height
    g /= canvas.width * canvas.height
    b /= canvas.width * canvas.height

    // 结果取整
    r = Math.round(r)
    g = Math.round(g)
    b = Math.round(b)

    // 给body设置背景颜色渐变
    const body = document.querySelector('body')
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  }
}

getImgThemeColor()
