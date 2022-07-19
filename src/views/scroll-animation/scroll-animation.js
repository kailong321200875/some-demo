import './scroll-animation.less'
import '@/styles/base.css'
import { useScrollTo } from './hooks'

window.onload = function () {
  let html = ''
  for (let i = 0; i < 1000; i++) {
    html += `<div class="box">${i}</div>`
  }
  document.querySelector('.scroll-animation1').innerHTML = html
  document.querySelector('.scroll-animation2').innerHTML = html
}

const randomScrollEl1 = document.getElementById('random-scroll1')
randomScrollEl1.onclick = () => {
  const min = 0
  const maxWidth = 2000 + 20
  // const maxHeight = (50 + 20) * 1000
  // 两个数字之间的随机数
  const random = Math.floor(Math.random() * (maxWidth - min + 1)) + min
  document.querySelector('.scroll-animation1').scrollTo({
    left: random
  })
  const { start } = useScrollTo({
    el: document.querySelector('.scroll-animation2'),
    to: random,
    duration: 500
  })
  start()
  console.log('【left】：', random)
}

const randomScrollEl2 = document.getElementById('random-scroll2')
randomScrollEl2.onclick = () => {
  const min = 0
  const maxHeight = (50 + 20) * 1000
  // 两个数字之间的随机数
  const random = Math.floor(Math.random() * (maxHeight - min + 1)) + min
  document.querySelector('.scroll-animation1').scrollTo({
    top: random
  })
  const { start } = useScrollTo({
    el: document.querySelector('.scroll-animation2'),
    position: 'scrollTop',
    to: random,
    duration: 500
  })
  start()
  console.log('【top】：', random)
}
