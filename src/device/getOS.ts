/**
 * 获取当前操作系统
 * @param appSign 需要区分的软件特有代码 如wldxm
 */
const getOS = ( appSign?: string ) => {
  let ua = window.navigator.userAgent.toLowerCase()
  if ( !appSign ) {
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

export default getOS