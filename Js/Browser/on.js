// 注册事件
const on = (el, evt, fn, opts = {}) => {
  const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e)
  el.addEventListener(
    evt,
    opts.target ? delegatorFn : fn,
    opts.options || false
  )
  if (opts.target) return delegatorFn
}

// example
const fn = () => console.log('!')
on(document.body, 'click', fn) // logs '!' upon clicking the body
on(document.body, 'click', fn, { target: 'p' })
// logs '!' upon clicking a `p` element child of the body
on(document.body, 'click', fn, { options: true })
// use capturing instead of bubbling
