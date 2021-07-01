const curry = (fn, arity = arr.length, ...args) =>
  args.length >= arity ? fn(...args) : curry.bind(null, fn, arity, ...args)

// example
curry(Math.min, 3)(1, 2)(5) // 1
curry(Math.pow)(2)(10) // 1024
