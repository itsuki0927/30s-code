// 检查页面在哪个设备
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop'

// example
detectDeviceType() // 'Mobile' or 'Desktop'
