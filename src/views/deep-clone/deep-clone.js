import './deep-clone.less'
import '@/styles/base.css'

import produce from 'immer'
import { cloneDeep } from 'lodash-es'

// 50-100的随机整数
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 随机生成复杂的数组对象
function generateArray() {
  const arr = []
  for (let i = 0; i < randomInt(50, 100); i++) {
    arr.push(generateObject())
  }
  return arr
}

function generateObject() {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  }
  return obj
}

const arr = generateArray()

window.onload = function () {
  const wrap = document.querySelector('#textarea')
  // 设置值
  wrap.value = JSON.stringify(arr)
}

const deepCloneBtn = document.querySelector('#deep-clone-btn')
deepCloneBtn.onclick = function () {
  console.time('deepClone')
  const newArr1 = cloneDeep(arr)
  console.log('deepClone之后是否相等：', newArr1 === arr)
  newArr1[0] = 1
  console.timeEnd('deepClone')

  console.time('immer')
  const newArr2 = produce(arr, (draft) => {
    draft[0] = 1
  })
  console.log('produce之后是否相等：', newArr2 === arr)
  console.timeEnd('immer')
}
