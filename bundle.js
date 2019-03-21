'use strict';

const toUpper = ( a ) => {
  return a.toUpperCase()
};

/**
 * 格式化金额数值
 */
var formatPrice$1 = formatPrice = ( num ) => {
  if ( num ) {
    let mainText = Number(num).toFixed(2) + '';
    let dotIndex = mainText.indexOf('.');
    let mainNum = mainText.slice(0, dotIndex);
    let subNum = mainText.slice(dotIndex+1);
    return mainNum + '.' + subNum
  }
  else {
    return '0.00'
  }
};

console.log('toUpper', toUpper);
console.log('formatPrice', formatPrice$1);

var index = {
  toUpper,
  formatPrice: formatPrice$1
};

module.exports = index;
