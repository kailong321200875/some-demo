import './jsmpeg.less'
import '@/styles/base.css'

const url = 'https://sanyuanda.oss-cn-hangzhou.aliyuncs.com/some-demo/out.ts'

window.onload = () => {
  const player = new window.JSMpeg.Player(url, {
    canvas: document.getElementById('canvas'),
    autoplay: false,
    loop: true,
    // 关闭声音
    audio: false,
    onSourceEstablished: async () => {
      player.play()
      console.log('onSourceEstablished')
    }
  })
}
