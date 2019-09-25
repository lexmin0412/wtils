const toUpper = ( a ) => {
  return a.toUpperCase()
}

/**
 * @param str 待转换的字符串
 */
const transFirstLetterToUpper = ( str ) => {
  return `${str.slice(0,1).toUpperCase()}${str.slice(1)}`
}

export default toUpper

export {
  transFirstLetterToUpper
}