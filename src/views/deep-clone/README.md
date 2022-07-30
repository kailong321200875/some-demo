<h1>高性能的深拷贝</h1>

以前进行深拷贝的时候，通常都是使用 `lodash` 中的 `cloneDeep` 方法，这个方法是递归遍历，所以在时间上会相对较长，且影响性能。当数据量越大时越明显。

这里介绍一个插件 `immer`，他的实现原理如下：

![alt](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad8820eb1ca7457f987a85dd9c275df5~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

# 官方文档

[Immer](https://immerjs.github.io/immer/zh-CN/)
