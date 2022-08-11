import './vanta.less'
import '@/styles/base.css'
import waves from 'better-vanta/dist/vanta.waves.min'
import * as THREE from 'three'

window.onload = () => {
  waves({
    el: document.querySelector('.vanta'),
    THREE: THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    shininess: 80.0,
    color: 0x161618
  })
}
