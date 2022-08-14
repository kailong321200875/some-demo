import './pannellum.less'
import '@/styles/base.css'

const width = window.innerWidth
const height = window.innerHeight
const container = document.getElementById('pannellum')
container.style.width = `${width}px`
container.style.height = `${height}px`

// viewer 配置及时间监听处理
const firstScene = 'living'
const viewer = window.pannellum.viewer('pannellum', {
  // 对autoLoad进行赋值,可以实现全景视频的自动播放
  default: {
    autoLoad: true,
    autoRotate: -2,
    autoRotateInactivityDelay: 2000,
    firstScene,
    sceneFadeDuration: 1000,
    // hotSpotDebug: true,
    // 由于在加载监听函数和场景切换函数中进行了 (hfov - 10) 操作，所以需要在全局的时候配置 hfov: viewer.getHov() + 需偏移距离
    hfov: 110 // 起始水平视野，hfov 默认值为 100
  },
  // scenes,
  scenes: {
    living: {
      sceneId: 'living',
      type: 'cubemap',
      preview:
        'https://img.alicdn.com/imgextra/i1/O1CN01dVOIEe1IhEcaIPw2z_!!6000000000924-0-tps-100-100.jpg',
      cubeMap: [
        'https://gw.alicdn.com/imgextra/i3/O1CN01550SRA1JcwWgs0sIj_!!6000000001050-0-tps-1500-1500.jpg',
        'https://img.alicdn.com/imgextra/i4/O1CN01e796bV1P2CRfCQkrA_!!6000000001782-0-tps-1500-1500.jpg',
        'https://img.alicdn.com/imgextra/i4/O1CN01GcW84X29SHK4oJlWc_!!6000000008066-0-tps-1500-1500.jpg',
        'https://img.alicdn.com/imgextra/i2/O1CN01ZHLck11GX2ZgBHA4o_!!6000000000631-0-tps-1500-1500.jpg',
        'https://img.alicdn.com/imgextra/i2/O1CN019c9xKu1ig1aC7pWPk_!!6000000004441-0-tps-1500-1500.jpg',
        'https://img.alicdn.com/imgextra/i4/O1CN01XfaKOu1kzNYODz7HD_!!6000000004754-0-tps-1500-1500.jpg'
      ],
      hotSpots: [
        {
          pitch: -5.984732127927283,
          yaw: 159.5438702588048,
          type: 'scene',
          text: '前往房间',
          sceneId: 'room'
        }
      ],
      yaw: 100 // 设置全景图的起始偏航位置
    },
    room: {
      sceneId: 'room',
      type: 'cubemap',
      preview:
        'https://img.alicdn.com/imgextra/i1/O1CN01KU3hrj1uJNO2OdyaC_!!6000000006016-0-tps-100-100.jpg',
      cubeMap: [
        'https://img.alicdn.com/imgextra/i1/O1CN01fWDIfB1bWgC3NnVVa_!!6000000003473-0-tps-1500-1500.jpg',
        'https://img.alicdn.com/imgextra/i2/O1CN01xt97cb1YMeg4BOCbI_!!6000000003045-0-tps-1500-1500.jpg',
        'https://img.alicdn.com/imgextra/i1/O1CN01xKTq1u1DR8cdeMeYt_!!6000000000212-0-tps-1500-1500.jpg',
        'https://img.alicdn.com/imgextra/i3/O1CN01Zko8Qy1p1uCLUYBji_!!6000000005301-0-tps-1500-1500.jpg',
        'https://img.alicdn.com/imgextra/i3/O1CN01k3AVvK28W71UNWXW7_!!6000000007939-0-tps-1500-1500.jpg',
        'https://img.alicdn.com/imgextra/i1/O1CN015MBT6P1N8x3J83Fqo_!!6000000001526-0-tps-1500-1500.jpg'
      ],
      hotSpots: [
        {
          pitch: -14.205156853981782,
          yaw: -80.6414865633464,
          type: 'scene',
          text: '前往客厅',
          sceneId: 'living'
        }
      ],
      yaw: 0
    }
  }
  // yaw: 180, // 初始视觉角度，水平偏移
  // pitch: 360 // 初始视觉角度，垂直偏移
})

// 场景首次加载时，不会触发 scenechange 事件，所以需要在加载完成后，手动设置一次
viewer.on('load', (id) => {
  viewer.setHfov(viewer.getHfov() - 10)
  viewer.setYaw(0) // 重置水平偏移角度
  viewer.setPitch(0) // 重置垂直偏移角度
})

viewer.on('scenechange', (id) => {
  console.warn(`正在切换至 ${id} 场景`)
  viewer.setHfov(viewer.getHfov() - 10)
})
