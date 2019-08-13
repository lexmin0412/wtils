/**
 * 剪切指定字符串中 `-`之前的内容
 * @param {传入字符串} str 
 */
const sliceStrUntilDivider = ( str, divider ) => {
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