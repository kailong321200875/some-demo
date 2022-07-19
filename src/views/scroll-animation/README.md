<h1>滚动过渡动画</h1>

目前实现滚动条动画的几种方式

# CSS 实现

## 原理

添加滚动行为属性： `scroll-behavior: smooth;` 即可实现滚动过渡动画。

兼容性差，不支持IE系列，具体可查看：https://caniuse.com/?search=scroll-behavior

## 使用

```less
.scroll-animation1 {
  scroll-behavior: smooth;
}

```

# javaScript 实现

## 原理

利用 `requestAnimationFrame` 来实现滚动动画，比传统利用 `setTimeout` 性能来的好。

兼容性好，大部分主流浏览器都支持，具体可查看：https://caniuse.com/?search=requestAnimationFrame

## 实现

```js
const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2
  if (t < 1) {
    return (c / 2) * t * t + b
  }
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}
const move = (el, position, amount) => {
  el[position] = amount
}

export function useScrollTo({ el, position = 'scrollLeft', to, duration = 500, callback }) {
  let isActive = false
  const start = el[position]
  const change = to - start
  const increment = 20
  let currentTime = 0

  function animateScroll() {
    if (!isActive) {
      return
    }
    currentTime += increment
    const val = easeInOutQuad(currentTime, start, change, duration)
    move(el, position, val)
    if (currentTime < duration && isActive) {
      requestAnimationFrame(animateScroll)
    } else {
      if (callback) {
        callback()
      }
    }
  }

  function run() {
    isActive = true
    animateScroll()
  }

  function stop() {
    isActive = false
  }

  return { start: run, stop }
}

```

## 使用

```js
const { start } = useScrollTo({
  el: document.querySelector('.scroll-animation2'),
  position: 'scrollTop',
  to: random,
  duration: 500
})

start()

```