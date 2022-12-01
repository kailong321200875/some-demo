import './order-number.less'
import '@/styles/base.css'

const btn = document.getElementById('button')

let count = 0

btn.addEventListener('click', () => {
  console.log('我被点击了')
  const ul = document.querySelector('ul')
  console.log(ul)
  if (count >= 7) {
    count = 0
  } else {
    count++
  }
  // 添加类名
  ul.className = `order-number-${count}`
})
