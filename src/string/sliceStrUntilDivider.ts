/**
 * 剪切指定字符串中 `-`之前的内容
 * @param str 待剪切的字符串
 * @param divider 分隔符
 */
const sliceStrUntilDivider = ( str: string, divider: string ) => {
  let signIndex = str.indexOf(divider)
  if ( signIndex < 0 ) {
    str = str.slice(0)
  }
  else {
    str = str.slice(0,signIndex&&signIndex||null)
  }
  return str
}

export default sliceStrUntilDivider