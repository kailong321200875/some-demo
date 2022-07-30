import './deep-focus.less'
import '@/styles/base.css'

const wrap = document.querySelector('.deep-focus')
const imgs = wrap.querySelectorAll('img')

wrap.addEventListener('mousemove', (e) => {
  // e.clientX 鼠标指针相对于窗口的X坐标
  // window.outerWidth 窗口的外部宽度
  const percent = e.clientX / window.outerWidth
  console.log('percent:', percent)
  // 计算水平方向的偏移量
  let offset = 10 * percent
  console.log('offset:', offset)
  const blur = 20

  // 遍历图片
  imgs.forEach((img, index) => {
    offset *= 1.3
    console.log('new-offset:', offset)
    // 计算模糊度
    const blurValue = Math.pow(index / imgs.length - percent, 2) * blur
    console.log('new-blur:', blurValue)
    // 计算好的属性赋值给css自定义属性
    img.style.setProperty('--offset', offset + 'px')
    img.style.setProperty('--blur', blurValue + 'px')
  })
})
