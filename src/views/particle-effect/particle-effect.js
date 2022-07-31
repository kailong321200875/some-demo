import './particle-effect.less'
import '@/styles/base.css'

const ctx = document.getElementById('canvas')
const content = ctx.getContext('2d')

const WIDTH = document.documentElement.clientWidth
const HEIGHT = document.documentElement.clientHeight

const round = []
const initRoundPopulation = 100

ctx.width = WIDTH
ctx.height = HEIGHT

class Round_item {
  constructor(index, x, y) {
    this.x = x
    this.y = y
    this.index = index
    this.r = Math.random() * 2 + 1
    const alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2
    this.color = 'rgba(255,255,255,' + alpha + ')'
  }

  draw() {
    content.fillStyle = this.color
    content.shadowBlur = this.r * 2
    content.beginPath()
    content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
    content.closePath()
    content.fill()
  }

  move() {
    this.y -= 0.15
    if (this.y <= -10) {
      this.y = HEIGHT + 10
    }
    this.draw()
  }
}

function init() {
  for (let i = 0; i < initRoundPopulation; i++) {
    round[i] = new Round_item(i, Math.random() * WIDTH, Math.random() * HEIGHT)
    round[i].draw()
  }
  animate()
}

function animate() {
  content.clearRect(0, 0, WIDTH, HEIGHT)

  for (const i in round) {
    round[i].move()
  }
  requestAnimationFrame(animate)
}

init()
