// put request
const httpPut = (url, data, callback, err = console.error) => {
  const request = new XMLHttpRequest()
  request.open('PUT', url, true)
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
  request.onload = () => callback(request.responseText)
  request.onerror = () => err(request)
  request.send(data)
}

// example
const password = 'fooBaz'
const data = JSON.stringify({
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1,
})
httpPut('https://jsonplaceholder.typicode.com/posts/1', data, request => {
  console.log(request.responseText)
}) /*
Logs: {
  id: 1,
  title: 'foo',
  body: 'bar',
  userId: 1
}
*/
