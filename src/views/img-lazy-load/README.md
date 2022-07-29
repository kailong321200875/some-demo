<h1>图片懒加载</h1>

之前比较传统的实现方式，是监听滚动事件，然后实时计算图片何时进入可视区域，这种实现方式对性能是有一定的损耗。

现在 javaScript 提供了一个 `IntersectionObserver` ，可以更好的帮助我们实现。

[参考文档](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver#%E5%8F%82%E8%80%83)
