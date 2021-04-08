// delete request
const httpDelete = (url, callback, err = console.error) => {
  const request = new XMLHttpRequest()
  request.open('DELETE', url, true)
  request.onload = () => callback(request)
  request.onerror = () => err(request)
  request.send()
}

// example
httpDelete('https://jsonplaceholder.typicode.com/posts/1', request => {
  console.log(request.responseText)
}) // Logs: {}
