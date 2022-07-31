<h1>鼠标和屏幕互动</h1>

# onmousemove 事件

在创建完了 Canvas 元素之后，我们要写鼠标移动的事件了，我们要考虑一下鼠标事件怎么写。

观察一下刚刚的 gif 图片，可以看出，在鼠标移动的过程中，不断地在鼠标滑过的位置产生一个逐渐变大的圆。

那么怎么让效果动起来呢？这就用到第 6 节讲到的知识了，我们在 Canvas 中创建动画的方式就是不断地清除屏幕内容然后重绘。

我们可以看出来，移动的轨迹是由一个一个的圆构成的，如果移动的速度过快的话，那么就可以明显看出一个一个的圆。

既然轨迹是由很多圆构成，那么我们就应该使用数组储存圆的信息（坐标、半径），然后在鼠标移动的时候将鼠标的位置信息储存在数组中。

所以在鼠标移动的过程我们首先要获得鼠标的坐标，然后将鼠标的坐标以及其他信息 push 到数组中去：

```js
window.onmousemove = function (event) {
  const mouseX = event.clientX
  const mouseY = event.clientY

  round_arr.push({
    mouseX: mouseX,
    mouseY: mouseY,
    r: para.r, // 设置半径每次增大的数值
    o: 1 //  判断圆消失的条件，数值越大，消失得越快
  })
}

```

# 设置 color

我们已经将圆的相关信息储存在 round_arr 数组中了，现在要在 animate() 函数中将圆显示出来。animate() 函数我们稍后再介绍。

创建圆需要的坐标信息以及半径，我们在鼠标移动的事件中都已经将其 push 到 round_arr 数组中了，还有一个条件是需要设置的，那就是颜色。

怎么对颜色进行处理呢？在 para 参数中，我们可以看出，其中有设置 color 值。如果 color 值不为 false，那么设置的圆的颜色就是设置的 color 值；如果设置的 color 值为 false，那么圆的颜色就是随机的。

```js
if (para.color) {
  color2 = para.color
} else {
  color = Math.random() * 360
}

```

那么怎么设置颜色的渐变呢？我们将 color 的颜色值依次增加一个增量。

```js
if (!para.color) {
  color += 0.1
  color2 = 'hsl(' + color + ',100%,80%)'
}

```
