import './index.less'
import 'bootstrap'

let defaultUrl = 'frame-animation'

// 代理点击事件
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('to')) {
    const url = e.target.getAttribute('data-url')
    if (defaultUrl === url) return
    const iframe = document.getElementById('content-iframe')
    e.preventDefault()
    iframe.src = `${url}.html`
    defaultUrl = url
    document.title = e.target.innerText
  }
})
