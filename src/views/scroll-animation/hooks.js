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
