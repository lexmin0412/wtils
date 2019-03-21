// 获取当前操作系统
export const getOS = ( appSign ) => {
  let ua = window.navigator.userAgent.toLowerCase()
  if ( !appSign ) {
    return null
  }
  else {
    if (ua.indexOf(appSign) == -1) {
      return null
    }
    if (ua.indexOf('android') > -1) {
      return 'android'
    }
    else if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1) {
      return 'ios'
    }
    else {
      return null
    }
  }
}