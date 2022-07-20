import './index.less'
import 'bootstrap'

let defaultUrl = 'frame-animation'

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search)
  const type = urlParams.get('type') || 'frame-animation'
  const name = urlParams.get('name') || 'CSS 帧动画'
  document.title = name
  const iframe = document.getElementById('content-iframe')
  iframe.src = `${type}.html`
}

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
    // 替换url参数
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('type', url)
    urlParams.set('name', e.target.innerText)
    window.history.replaceState({}, '', `?${urlParams.toString()}`)
  }
})
