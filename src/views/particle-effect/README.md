<h1>粒子特效</h1>

# 设置 Round_item 类

在创建了一个全屏的 Canvas 之后，我们来创建单个的 Round_item 类。

首先我们 Round_item 类需要有什么参数呢？我们要设置的是位置随机、透明度随机、半径随机的圆。为了区分不同的圆，我们还应该设置一个唯一的 index 参数。

所以我们需要的参数有：

- x 坐标
- y 坐标
- 半径
- 透明度
- index
根据上面这些可以得出我们的 Round_item 类：

```js
class Round_item {
  constructor(index, x, y) {
    this.x = x
    this.y = y
    this.index = index
    this.r = Math.random() * 2 + 1
    const alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2
    this.color = 'rgba(255,255,255,' + alpha + ')'
  }
}

```
这里我们使用了class的方式来创建单个的圆，我们还需要一个变量 initRoundPopulation 来设置 round 的个数，然后我们便可以通过 for 循环创建出 initRoundPopulation 个圆。

# 设置 draw() 方法

在设置了单个的 Round_item 类之后，我们还要给每一个 round 设置 draw() 方法，所以我们需要将 draw() 方法设置在 Round_item 的原型中，这样我们创建出来的每一个 Round_item 实例对象都拥有了 draw() 方法。

```js
draw() {
  content.fillStyle = this.color
  content.shadowBlur = this.r * 2
  content.beginPath()
  content.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
  content.closePath()
  content.fill()
}

```

# 设置初始化 init() 函数

然后我们就需要设置初始化 init() 函数了，在 init() 函数中，我们的主要任务是创建单个的 round，然后使用其 draw() 方法。

# 随机粒子动起来

创建 move() 函数

在 move() 方法中，我们只需要改变 round 的 y 坐标即可，并且设置边界条件，当 y 坐标的值小于 -10（也可以是其他负值），代表该 round 已经超出了屏幕，这个时候我们要将其移动到屏幕的最底端，这样才能保证我们创建的粒子数不变，一直是 initRoundPopulation 的值。

这样就是一个粒子在不断地上升，上升到了最顶端再移动到最底端的循环过程，看起来像是有源源不断的粒子，但其实总数是不变的。

在 y 坐标的变化之后，我们还需要使用新的 y 坐标再来重新绘制一下该 round。
