<h1>Lottie 动画库</h1>

开源面向iOS、android、Web的动画库，能分析AE，LottieFile(Figma plugins)导出的动画，并且能让原生APP像使用静态素材一样使用这些动画，完美实现动画效果。

# 横向对比

| 动画库 | SVGA | Lottie |
| -------------------- | -------------------- | -------------------- |
| 开发成本 | 低 | 低 |
| 支持平台 | Android/Ios/H5 | Android/Ios/H5 |
| 资源产物 | 压缩文件（不支持二次编辑） | JSON（支持二次编辑） |
| 动态替换元素 | 支持 | 不支持 |
| 循环指定某帧 | 支持 | 支持 |
| 占用内存 | 少 | 少 |
| 支持 AE 动效 | 较少 | 较多 |
| 适合场景 | 直播、光效 | 渐变、矢量、图标、微交互 |

# 相关文档

[Lottie DOC-Web官网](https://airbnb.io/lottie/#/web)

[Lottie预览JSON动效地址](https://lottiefiles.com/preview)

[Lottie免费动画](https://lottiefiles.com/featured)

# 安装

```shell
pnpm i lottie-web

```

# 使用

```js
// 引入lottie.js
import Lottie from 'lottie-web'
// 动画库json文件
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

```
