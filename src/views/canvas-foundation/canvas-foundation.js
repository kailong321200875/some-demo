import './canvas-foundation.less'
import '@/styles/base.css'

const canvas = document.getElementById('canvas1')
const context = canvas.getContext('2d')
canvas.width = 300
canvas.height = 300

// 起始一条路径，或重置当前路径
context.beginPath()
// 创建弧/曲线
context.arc(100, 100, 50, 0, Math.PI * 2, true)
// 创建从当前点回到起始点的路径
context.closePath()
// 设置或返回用于填充绘画的颜色、渐变或模式
context.fillStyle = 'rgb(255,255,255)'
// 设置模糊程度
context.shadowBlur = 20
context.shadowColor = '#fff'
// 填充当前绘图（路径）
context.fill()

// ================================================================

const canvas2 = document.getElementById('canvas2')
const context2 = canvas2.getContext('2d')
canvas2.width = 300
canvas2.height = 300

// 起始一条路径，或重置当前路径
context2.beginPath()
context2.moveTo(100, 100)
context2.lineTo(200, 200)
context2.strokeStyle = 'rgb(255,255,255)'
context2.stroke()

// ================================================================

const canvas3 = document.getElementById('canvas3')
const context3 = canvas3.getContext('2d')
canvas3.width = 300
canvas3.height = 300

context3.beginPath()
// 绘制实心矩形
const grd = context3.createLinearGradient(10, 10, 10, 100)
grd.addColorStop(0, 'pink')
grd.addColorStop(1, 'white')
context3.fillStyle = grd
context3.fillRect(10, 10, 100, 100)

context3.strokeStyle = '#fff'
// 绘制空心矩形
context3.strokeRect(130, 10, 100, 100)
