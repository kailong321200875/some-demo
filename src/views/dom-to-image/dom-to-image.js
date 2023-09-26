import './dom-to-image.less'
import '@/styles/base.css'

const btn = document.querySelector('#create-image')

btn.addEventListener('click', async () => {
  const canvas = document.createElement('canvas')
  const ratio = window.devicePixelRatio || 1
  canvas.width = 500 * ratio // 实际渲染像素
  canvas.height = 500 * ratio // 实际渲染像素
  canvas.style.width = `${500}px` // 控制显示大小
  canvas.style.height = `${500}px` // 控制显示大小
  const ctx = canvas.getContext('2d')
  ctx.scale(ratio, ratio)
  if (!ctx) {
    // reject('canvas context is null')
    return
  }

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  svg.setAttribute('width', '500')
  svg.setAttribute('height', '500')

  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs')
  const style = document.createElement('style', 'text/css')
  const fontBase64 = await loadFontBase64(
    'https://sanyuanda.oss-cn-hangzhou.aliyuncs.com/fonts/JinNianYeYaoJiaYouYa-2.woff2'
  )
  style.innerHTML = `
    @font-face {
      font-family: 'font-text';
      font-display: swap;
      font-weight: normal;
      font-style: normal;
      src: url(${fontBase64});
    }
    .wrap {
      width: 500px;
      height: 500px;
      background-color: red;
      position: relative;
    }
    .inner {
      width: 400px;
      height: 400px;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 400px;
      font-family: 'font-text';
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100% !important;
    }
  `
  defs.appendChild(style)
  svg.appendChild(defs)
  const foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject')
  foreignObject.setAttribute('width', '100%')
  foreignObject.setAttribute('height', '100%')

  const div = document.querySelector('.wrap')
  const imgEl = div.querySelector('img')
  const imgUrl = imgEl.getAttribute('src')
  const imgBase64 = await getImageBase64(imgUrl)
  imgEl.setAttribute('src', imgBase64)

  foreignObject.appendChild(div.cloneNode(true))
  svg.appendChild(foreignObject)
  const domStr = new XMLSerializer().serializeToString(svg)

  const img = new Image()
  img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(domStr)}`
  img.onload = async () => {
    ctx.drawImage(img, 0, 0, 500, 500)
    const base64 = canvas.toDataURL('image/png')
    console.log(base64)
  }
  img.onerror = (e) => {
    console.log('图片加载失败')
    // reject(e)
  }
  document.querySelector('#wrap2').appendChild(img)
})

const loadFontBase64 = (fontUrl) => {
  return new Promise((resolve) => {
    const xmlHttpRequest = new XMLHttpRequest()
    xmlHttpRequest.open('GET', fontUrl, true)
    xmlHttpRequest.responseType = 'blob'
    xmlHttpRequest.onerror = () => {
      resolve('')
    }
    xmlHttpRequest.onload = function () {
      const reader = new FileReader()

      reader.onloadend = function () {
        const base64data = reader.result
        resolve(base64data)
      }
      reader.readAsDataURL(
        new Blob([xmlHttpRequest.response], {
          type: 'application/octet-stream'
        })
      )
    }
    xmlHttpRequest.send()
  })
}

const getImageBase64 = (imgUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.setAttribute('crossOrigin', 'anonymous')
    img.src = imgUrl
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0, img.width, img.height)
      const base64 = canvas.toDataURL('image/png')
      resolve(base64)
    }
    img.onerror = (e) => {
      reject(e)
    }
  })
}
