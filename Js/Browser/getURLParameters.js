/**
 * 创建一个包含当前URL参数的对象
 *
 * @param {string} url 当前url
 * @returns {[key:string]:string}
 */
const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf('='))] = decodeURIComponent(v.slice(v.indexOf('=') + 1))), a
    ),
    {},
  )

// example
getURLParameters('google.com') // {}
getURLParameters('http://url.com/page?name=Adam&surname=Smith')
// {name: 'Adam', surname: 'Smith'}
