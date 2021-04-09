// 如果它目前在http,重定向页面到https
const httpsRedirect = () => {
  if (location.protocol !== 'https')
    location.replace(`https://${location.href.split('//')[1]}`)
}

// example
httpsRedirect()
