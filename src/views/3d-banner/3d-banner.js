import './3d-banner.less'
import '@/styles/base.css'

// 数值越大，角度越大
const ANGLE = 40

const wowpanels = document.querySelectorAll('.wowpanel')
const colors = ['#4975FB', '#924DE6', '#EF5252', '#F59500']

wowpanels.forEach((element, i) => {
  floatable(element, colors[i])
})

function floatable(panel, color) {
  const content = panel.querySelector('.content')
  content.style.backgroundColor = color

  panel.addEventListener('mouseout', (e) => {
    content.style.transform = `perspective(300px)
								   rotateX(0deg)
								   rotateY(0deg)
								   rotateZ(0deg)`
  })

  panel.addEventListener('mousemove', (e) => {
    const w = panel.clientWidth
    const h = panel.clientHeight
    const y = ((e.offsetX - w * 0.5) / w) * ANGLE
    const x = ((1 - (e.offsetY - h * 0.5)) / h) * ANGLE

    content.style.transform = `perspective(300px)
								   rotateX(${x}deg)
								   rotateY(${y}deg)`
  })
}
