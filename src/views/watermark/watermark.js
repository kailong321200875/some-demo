import './watermark.less'
import '@/styles/base.css'
import { useWatermark } from './useWatermark'

const { setWatermark } = useWatermark()

setWatermark('我是水印')
