import './lottie.less'
import '@/styles/base.css'
// 引入lottie.js
import Lottie from 'lottie-web'
import json from './data.json'

window.onload = function () {
  Lottie.loadAnimation({
    container: document.querySelector('.lottie1'),
    renderer: 'canvas',
    loop: true,
    autoplay: true,
    animationData: json,
    name: 'lottie-demo'
  })
}
