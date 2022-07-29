<h1>高性能的深拷贝</h1>

以前进行深拷贝的时候，通常都是使用 `lodash` 中的 `cloneDeep` 方法，这个方法是递归遍历，所以在时间上会相对较长，且影响性能。当数据量越大时越明显。

这里介绍一个插件 `immer`，他的实现原理如下：

https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad8820eb1ca7457f987a85dd9c275df5~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?

# 示例

```js
const io = new IntersectionObserver(callback, options)

io.observe(DOM)

```

callback 是添加监听后，当监听目标发生滚动变化时触发的回调事件，接收一个 `entries`，即 `IntersectionObserverEntry` 实例，描述了目标元素与root的交差状态，`IntersectionObserverEntry`具体参数如下：

| 属性 | 描述 |
| -------------------- | -------------------- |
| boundingClientRect | 返回包含目标元素的边界信息的DOMRectReadOnly. 边界的计算方式与 Element.getBoundingClientRect() 相同。 |
| intersectionRatio | 返回intersectionRect 与 boundingClientRect 的比例值。 |
| intersectionRect | 返回一个 DOMRectReadOnly 用来描述根和目标元素的相交区域。 |
| isIntersecting | 返回一个布尔值，如果目标元素与交叉区域观察者对象 (intersection observer) 的根相交，则返回 true .如果返回 true, 则 IntersectionObserverEntry 描述了变换到交叉时的状态; 如果返回 false, 那么可以由此判断，变换是从交叉状态到非交叉状态。 |
| rootBounds | 返回一个 DOMRectReadOnly 用来描述交叉区域观察者 (intersection observer) 中的根。 |
| target | 与根出现相交区域改变的元素 (Element). |
| time | 返回一个记录从 IntersectionObserver 的时间原点 (time origin) 到交叉被触发的时间的时间戳 (DOMHighResTimeStamp). |

## options

options 是一个对象，用来配置参数，非必填，共有三个属性：

| 属性 | 描述 |
| -------------------- | -------------------- |
| root | 所监听对象的祖先元素，如果传入null或者不传，则默认使用顶级文档的视窗，一般为html |
| rootMargin | 计算交叉时添加到根 (root)边界盒bounding box (en-US)的矩形偏移量， 可以有效的缩小或扩大根的判定范围从而满足计算需要。此属性返回的值可能与调用构造函数时指定的值不同，因此可能需要更改该值，以匹配内部要求。所有的偏移量均可用像素 (pixel)(px) 或百分比 (percentage)(%) 来表达，默认值为"0px 0px 0px 0px"。 |
| thresholds | 一个包含阈值的列表，按升序排列，列表中的每个阈值都是监听对象的交叉区域与边界区域的比率。当监听对象的任何阈值被越过时，都会生成一个通知 (Notification)。如果构造器未传入值，则默认值为 0。 |

# 兼容性

[IntersectionObserver](https://caniuse.com/?search=IntersectionObserver)
