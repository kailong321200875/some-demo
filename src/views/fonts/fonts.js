import './fonts.less'
import '@/styles/base.css'

const ttfBtn = document.querySelector('#ttf')
const otfBtn = document.querySelector('#otf')
const woffBtn = document.querySelector('#woff')
const woff2Btn = document.querySelector('#woff2')

ttfBtn.addEventListener('click', () => {
  console.time('ttf')
  const fontFile = new FontFace(
    'ttf-font',
    'url(https://sanyuanda.oss-cn-hangzhou.aliyuncs.com/fonts/JinNianYeYaoJiaYouYa-2.ttf)'
  )

  fontFile.load().then(function (fontface) {
    // 字体加载完成后，将字体添加到页面中
    document.fonts.add(fontface)
    console.timeEnd('ttf')
  })
})

otfBtn.addEventListener('click', () => {
  console.time('otf')
  const fontFile = new FontFace(
    'otf-font',
    'url(https://sanyuanda.oss-cn-hangzhou.aliyuncs.com/fonts/JinNianYeYaoJiaYouYa-2.otf)'
  )

  fontFile.load().then(function (fontface) {
    // 字体加载完成后，将字体添加到页面中
    document.fonts.add(fontface)
    console.timeEnd('otf')
  })
})

woffBtn.addEventListener('click', () => {
  console.time('woff')
  const fontFile = new FontFace(
    'woff-font',
    'url(https://sanyuanda.oss-cn-hangzhou.aliyuncs.com/fonts/JinNianYeYaoJiaYouYa-2.woff)'
  )

  fontFile.load().then(function (fontface) {
    // 字体加载完成后，将字体添加到页面中
    document.fonts.add(fontface)
    console.timeEnd('woff')
  })
})

woff2Btn.addEventListener('click', () => {
  console.time('woff2')
  const fontFile = new FontFace(
    'woff2-font',
    'url(https://sanyuanda.oss-cn-hangzhou.aliyuncs.com/fonts/JinNianYeYaoJiaYouYa-2.woff2)'
  )

  fontFile.load().then(function (fontface) {
    // 字体加载完成后，将字体添加到页面中
    document.fonts.add(fontface)
    console.timeEnd('woff2')
  })
})
