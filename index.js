import toUpper from './string/toUpper'
import formatPrice from './numbers/formatPrice'
import showShareHints from './share/showShareHints'
import isAfterNow from './time/isAfterNow'
// const isAfterNow = require('time/isAfterNow')

console.log('toUpper', toUpper)
console.log('formatPrice', formatPrice)

export default {
  toUpper,
  formatPrice,
  showShareHints,
  isAfterNow
}