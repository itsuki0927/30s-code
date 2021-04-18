// 在每个动画帧上调用提供的回调
const recordAnimationFrames = (callback, autoStart = true) => {
  let running = false,
    raf
  const stop = () => {
    if (!running) return
    running = false
    cancelAnimationFrame(raf)
  }
  const start = () => {
    if (running) return
    running = true
    run()
  }
  const run = () => {
    raf = requestAnimationFrame(() => {
      callback()
      if (running) run()
    })
  }
  if (autoStart) start()
  return { start, stop }
}

// example
const cb = () => console.log('Animation frame fired')
const recorder = recordAnimationFrames(cb)
// logs 'Animation frame fired' on each animation frame
recorder.stop() // stops logging
recorder.start() // starts again
const recorder2 = recordAnimationFrames(cb, false)
// `start` needs to be explicitly called to begin recording frames
