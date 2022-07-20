<h1>提取图片主题色</h1>

提取图片主题色的方式有挺多种，大部分都可以通过一些插件来实现提取图片的主题色。

这里自己写一个提取图片主题色的方法

# 核心代码

```js
// 提取图片主题色
function getImgThemeColor(url) {
  const img = document.createElement('img')
  img.src = url || require('@/assets/imgs/bg.jpeg')
  img.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)

    // 获取像素数据
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data

    let r = 0
    let g = 0
    let b = 0

    // 取所有像素平均值
    for (let row = 0; row < canvas.height; row++) {
      for (let col = 0; col < canvas.width; col++) {
        const i = (row * canvas.width + col) * 4
        r += data[i]
        g += data[i + 1]
        b += data[i + 2]
      }
    }

    // 计算平均值
    r /= canvas.width * canvas.height
    g /= canvas.width * canvas.height
    b /= canvas.width * canvas.height

    // 结果取整
    r = Math.round(r)
    g = Math.round(g)
    b = Math.round(b)

    // 给body设置背景颜色渐变
    const body = document.querySelector('body')
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  }
}

```
