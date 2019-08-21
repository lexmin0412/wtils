/**
 * 格式化金额数值
 * @param num 需要格式化的数值/字符串
 */
const formatPrice = ( num: number | string ) => {
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

export default formatPrice
