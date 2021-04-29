// 发布订阅
const createEventHub = () => ({
  hub: Object.create(null),
  emit(event, data) {
    ;(this.hub[event] || []).forEach(handler => handler(data))
  },
  on(event, handler) {
    if (!this.hub[event]) this.hub[event] = []
    this.hub[event].push(handler)
  },
  off(event, handler) {
    const i = (this.hub[event] || []).findIndex(e => e === handler)
    if (i > -1) this.hub[event].splice(i, 1)
    if (this.hub[event].length === 0) delete this.hub[event]
  },
})

const handler = data => console.log(data)
const hub = createEventHub()
let increment = 0

// Subscribe: listen for different types of events
hub.on('message', handler)
hub.on('message', () => console.log('Message event fired'))
hub.on('increment', () => increment++)

// Publish: emit events to invoke all handlers subscribed to them, passing the data to them as an argument
hub.emit('message', 'hello world') // logs 'hello world' and 'Message event fired'
hub.emit('message', { hello: 'world' }) // logs the object and 'Message event fired'
hub.emit('increment') // `increment` variable is now 1

// Unsubscribe: stop a specific handler from listening to the 'message' event
hub.off('message', handler)
