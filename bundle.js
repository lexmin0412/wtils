'use strict';

const toUpper = ( a ) => {
  return a.toUpperCase()
};

/**
 * 格式化金额数值
 */
const formatPrice = ( num ) => {
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

// 显示分享弹窗

const showShareHints =()=> {

	if ( document.getElementById('mask-container') ) {
		document.body.removeChild(document.getElementById('mask-container'));
	}
	else {
		let container = document.createElement('div');
		container.setAttribute('id', 'mask-container');
		let innerHtml =
		`<div className={styles['com-share-hints-container']} style="width: 100%; height:100%; position: fixed; top:0; left:0; z-index: 999;display:block; overflow: hidden">
			<img src="./images/share_reminder_wx.png"
				style="width:100%;"
				alt=""
			/>
		</div>`;
		container.innerHTML = innerHtml;
		document.body.appendChild(container);

		container.addEventListener('click',function(){
			document.body.removeChild(container);
		});
	}
};

// 是否晚于当前时间
const isAfterNow = ( compareDate ) => {
  var now = new Date();
  var dater = new Date(compareDate);
  var year = dater.getFullYear();
  var month = dater.getMonth();
  var date = dater.getDate();
  var hour = dater.getHours();
  var minute = dater.getMinutes();
  var seconds = dater.getSeconds();

  var now = new Date();
  var nowYear = now.getFullYear();
  var nowMonth = now.getMonth();
  var nowDate = now.getDate();
  var nowHour = now.getHours();
  var nowMinute = now.getMinutes();
  var nowSecond = now.getSeconds();

  if ( year > nowYear ) {
    return true
  }
  else if ( year == nowYear ) {
    if ( month > nowMonth ) {
      return true
    }
    else if ( month == nowMonth ) {
      if ( date > nowDate ) {
        return true
      }
      else if ( date == nowDate ) {
        if ( hour > nowHour ) {
          return true
        }
        else if ( hour == nowHour ) {
          if ( minute > nowMinute ) {
            return true
          }
          else if ( minute == nowMinute ) {
            if ( seconds > nowSecond ) {
              return true
            }
            else if ( seconds == nowSecond ) {
              return true
            }
            else {
              return false
            }
          }
          else {
            return false
          }
        }
        else {
          return false
        }
      }
      else {
        return false
      }
    }
    else {
      return false
    }
  }
  else {
    return false
  }
};

/**
 * 剪切指定字符串中 `-`之前的内容
 * @param {传入字符串} str 
 */
const sliceStrUntilDivider = ( str, divider ) => {
  let signIndex = str.indexOf(divider);
  if ( signIndex < 0 ) {
    str = str.slice(0);
  }
  else {
    str = str.slice(0,signIndex&&signIndex||null);
  }
  return str
};

// 获取当前操作系统
const getOS = ( appSign ) => {
  let ua = window.navigator.userAgent.toLowerCase();
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
};

// const isAfterNow = require('time/isAfterNow')

console.log('toUpper', toUpper);
console.log('formatPrice', formatPrice);

var index = {
  toUpper,
  formatPrice,
  showShareHints,
  isAfterNow,
  sliceStrUntilDivider,
  getOS
};

module.exports = index;
