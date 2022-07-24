import './waterfall-flow.less'
import '@/styles/base.css'

// 监听body的滚动事件
window.onscroll = function () {
  // 判断滚动到底部
  if (
    document.documentElement.scrollTop + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight
  ) {
    renderDiv().then((data) => {
      waterfall(data)
    })
  }
}

function randomArray(length) {
  const arr = []
  for (let i = 0; i < length; i++) {
    // 随机生成200到400之间的数
    arr.push(Math.floor(Math.random() * (400 - 200 + 1) + 200))
  }
  return arr
}

function renderDiv() {
  return new Promise((resolve, reject) => {
    const arrs = randomArray(30)
    resolve(arrs)
  })
}

window.onload = function () {
  renderDiv().then((data) => {
    waterfall(data)
  })
}

// 定义一个数组，用来存放每一列的高度
const heights = []

function waterfall(data, resize = false) {
  // 获取所有item
  const items = document.getElementsByClassName('item')
  const itemsLength = items.length

  // 设置一个默认宽度
  const width = 200

  // 定义间隙 20px
  const gap = 20

  // 首先确定列数 = 页面宽度 / 图片宽度
  const cols = Math.floor(document.documentElement.clientWidth / (width + gap))

  if (resize) {
    for (let i = 0; i < itemsLength; i++) {
      if (i < cols) {
        // 满足这个条件，说明是第一行的图片
        heights[i] = items[i].offsetHeight
        items[i].style.top = '0'
        items[i].style.left = `${i * (width + gap)}px`
      } else {
        // 其他行，先找出最矮的那一列 和 索引
        // 假设最小高度是第一个元素
        let minHeight = heights[0]
        let index = 0
        // 找出最小高度
        for (let j = 1; j < cols; j++) {
          if (heights[j] < minHeight) {
            minHeight = heights[j]
            index = j
          }
        }
        // 设置top值
        items[i].style.top = `${minHeight + gap}px`
        // 设置left值
        items[i].style.left = `${index * (width + gap)}px`

        // 更新最矮高度
        heights[index] += items[i].offsetHeight + gap
      }
    }
  } else {
    const length = data.length

    for (let i = 0; i < length; i++) {
      if ((!itemsLength ? i : itemsLength - 1 + i) < cols) {
        // 满足这个条件，说明是第一行的图片
        heights[i] = data[i]

        let html = ``
        html += `<div class="item" style="width: ${width}px; height: ${data[i]}px; top: 0; left: ${
          i * (width + gap)
        }px"></div>`
        const wrap = document.querySelector('.waterfall-flow')
        // 向后插入
        wrap.insertAdjacentHTML('beforeend', html)
      } else {
        // 其他行，先找出最矮的那一列 和 索引
        // 假设最小高度是第一个元素
        let minHeight = heights[0]
        let index = 0
        // 找出最小高度
        for (let j = 1; j < cols; j++) {
          if (heights[j] < minHeight) {
            minHeight = heights[j]
            index = j
          }
        }

        let html = ``
        html += `<div class="item" style="width: ${width}px; height: ${data[i]}px; top: ${
          minHeight + gap
        }px; left: ${index * (width + gap)}px"></div>`
        const wrap = document.querySelector('.waterfall-flow')
        // 向后插入
        wrap.insertAdjacentHTML('beforeend', html)

        // 更新最矮高度
        heights[index] += data[i] + gap
      }
    }
  }
}

window.onresize = function () {
  waterfall([], true)
}
