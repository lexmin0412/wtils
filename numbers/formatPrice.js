/**
 * 格式化金额数值
 */
export default const formatPrice = ( num ) => {
  if ( num ) {
    let mainText = Number(num).toFixed(2) + ''
    let dotIndex = mainText.indexOf('.')
    let mainNum = mainText.slice(0, dotIndex)
    let subNum = mainText.slice(dotIndex+1)
    return mainNum + '.' + subNum
  }
  else {
    return '0.00'
  }
}
