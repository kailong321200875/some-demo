<h1>Canvas 基础绘制</h1>

记录一下 canvas 的一些知识点

# 获取 Canvas 对象

canvas.getContext(contextType, contextAttributes)

**contextType**

- 2d：代表一个二维渲染上下文
- webgl：代表一个三维渲染上下文
- webgl2：代表一个三维渲染上下文；这种情况下只能在浏览器中实现 WebGL 版本2 (OpenGL ES 3.0)。

**contextAttributes**

这个参数用的比较少，暂时先不管

# 绘制路径

| 方法 | 描述 |
| -------------------- | -------------------- |
| fill() | 填充路径 |
| stroke() | 描边 |
| arc() | 创建圆弧 |
| rect() | 创建矩形 |
| fillRect() | 绘制矩形路径区域 |
| strokeRect() | 绘制矩形路径描边 |
| clearRect() | 在给定的矩形内清除指定的像素 |
| arcTo() | 创建两切线之间的弧 |
| beginPath() | 起始一条路径，或重置当前路径 |
| moveTo() | 把路径移动到画布中的指定点，不创建线条 |
| lineTo() | 添加一个新点，然后在画布中创建从该点到最后指定点的线条 |
| closePath() | 创建从当前点回到起始点的路径 |
| clip() | 从原始画布剪切任意形状和尺寸的区域 |
| quadraticCurveTo() | 创建二次方贝塞尔曲线 |
| bezierCurveTo() | 创建三次方贝塞尔曲线 |
| isPointInPath() | 如果指定的点位于当前路径中，则返回 true，否则返回 false |

## 绘制弧/曲线 - arc()

arc() 方法创建弧/曲线（用于创建圆或部分圆）。

```js
context.arc(x, y, r, sAngle, eAngle, counterclockwise);

```

- x：圆心的 x 坐标
- y：圆心的 y 坐标
- r：圆的半径
- sAngle：起始角，以弧度计（弧的圆形的三点钟位置是 0 度）
- eAngle：结束角，以弧度计
- counterclockwise：可选。规定应该逆时针还是顺时针绘图。false 为顺时针，true 为逆时针

![alt](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/21/15fdf0929fbe015f~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp)

## 绘制直线

如果没有 moveTo，那么第一次 lineTo 的就视为 moveTo

每次 lineTo 后如果没有 moveTo，那么下次 lineTo 的开始点为前一次 lineTo 的结束点。

给绘制的直线添加样式：

| 样式 | 描述 |
| -------------------- | -------------------- |
| lineCap | 设置或返回线条的结束端点样式 |
| lineJoin | 设置或返回两条线相交时，所创建的拐角类型 |
| lineWidth | 设置或返回当前的线条宽度 |
| miterLimit | 设置或返回最大斜接长度 |

# 颜色、样式和阴影

| 属性 | 描述 |
| -------------------- | -------------------- |
| fillStyle | 设置或返回用于填充绘画的颜色、渐变或模式 |
| strokeStyle | 设置或返回用于笔触的颜色、渐变或模式 |
| shadowColor | 设置或返回用于阴影的颜色 |
| shadowBlur | 设置或返回用于阴影的模糊级别 |
| shadowOffsetX | 设置或返回阴影距形状的水平距离 |
| shadowOffsetY | 设置或返回阴影距形状的垂直距离 |

## 设置渐变

| 方法 | 描述 |
| -------------------- | -------------------- |
| createLinearGradient() | 创建线性渐变（用在画布内容上） |
| createPattern() | 在指定的方向上重复指定的元素 |
| createRadialGradient() | 创建放射状/环形的渐变（用在画布内容上） |
| addColorStop() | 规定渐变对象中的颜色和停止位置 |

```js
context.createLinearGradient(x0, y0, x1, y1);

```

- x0：开始渐变的 x 坐标
- y0：开始渐变的 y 坐标
- x1：结束渐变的 x 坐标
- y1：结束渐变的 y 坐标

# 图形转换

| 方法 | 描述 |
| -------------------- | -------------------- |
| scale() | 缩放当前绘图至更大或更小 |
| rotate() | 旋转当前绘图 |
| translate() | 重新映射画布上的 (0,0) 位置 |
| transform() | 替换绘图的当前转换矩阵 |
| setTransform() | 将当前转换重置为单位矩阵，然后运行 transform() |

# 图像绘制

drawImage()	向画布上绘制图像、画布或视频

```js
context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);

```

- img：规定要使用的图像、画布或视频
- sx：可选。开始剪切的 x 坐标位置
- sy：可选。开始剪切的 y 坐标位置
- swidth：可选。被剪切图像的宽度
- sheight：可选。被剪切图像的高度
- x：在画布上放置图像的 x 坐标位置
- y：在画布上放置图像的 y 坐标位置
- width：可选。要使用的图像的宽度（伸展或缩小图像）
- height：可选。要使用的图像的高度（伸展或缩小图像）
