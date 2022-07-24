import './img-lazy-load.less'
import '@/styles/base.css'

function lazyload() {
  const imgs = document.querySelectorAll('img[data-src]')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 在这里，通常也可以用于埋点曝光统计
          const img = entry.target
          const creatImg = new Image()
          creatImg.src = img.getAttribute('data-src')
          creatImg.onload = () => {
            img.setAttribute('src', img.getAttribute('data-src'))
            observer.unobserve(img)
          }
        }
      })
    },
    {
      rootMargin: '0px 0px -100px 0px'
    }
  )
  imgs.forEach((img) => observer.observe(img))
}

lazyload()
