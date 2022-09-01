import './ffmpeg.less'
import '@/styles/base.css'
import './coi-serviceworker.min'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
import mp41 from '@/assets/medias/video.mp4'

// 创建实例
const ffmpeg = createFFmpeg({
  log: true,
  corePath: new URL('ffmpeg/ffmpeg-core.js', document.location).href,
  progress: (p) => {
    console.log('【progress】：', p)
  }
})

;(async () => {
  await ffmpeg.load()
  ffmpeg.FS('writeFile', 'test', await fetchFile(mp41))
  await ffmpeg.run('-i', 'test', 'output.mp4')
  const data = ffmpeg.FS('readFile', 'output.mp4')
  const video = document.getElementById('player')
  video.src = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }))
  console.log(data)
})()
