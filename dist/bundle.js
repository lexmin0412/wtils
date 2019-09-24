'use strict';

var toUpper = function (a) {
    return a.toUpperCase();
};
/**
 * @param str 待转换的字符串
 */
var transFirstLetterToUpper = function (str) {
    return "" + str.slice(0, 1).toUpperCase() + str.slice(1);
};

/**
 * 格式化金额数值
 * @param num 需要格式化的数值/字符串
 */
var formatPrice = function (num) {
    if (num) {
        var mainText = Number(num).toFixed(2) + '';
        var dotIndex = mainText.indexOf('.');
        var mainNum = mainText.slice(0, dotIndex);
        var subNum = mainText.slice(dotIndex + 1);
        return mainNum + '.' + subNum;
    }
    else {
        return '0.00';
    }
};

// 显示分享弹窗
var showShareHints = function () {
    if (document.getElementById('mask-container')) {
        document.body.removeChild(document.getElementById('mask-container'));
    }
    else {
        var container_1 = document.createElement('div');
        container_1.setAttribute('id', 'mask-container');
        var innerHtml = "<div className={styles['com-share-hints-container']} style=\"width: 100%; height:100%; position: fixed; top:0; left:0; z-index: 999;display:block; overflow: hidden\">\n\t\t\t<img src=\"./images/share_reminder_wx.png\"\n\t\t\t\tstyle=\"width:100%;\"\n\t\t\t\talt=\"\"\n\t\t\t/>\n\t\t</div>";
        container_1.innerHTML = innerHtml;
        document.body.appendChild(container_1);
        container_1.addEventListener('click', function () {
            document.body.removeChild(container_1);
        });
    }
};

// 是否晚于当前时间
var isAfterNow = function (compareDate) {
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
    if (year > nowYear) {
        return true;
    }
    else if (year == nowYear) {
        if (month > nowMonth) {
            return true;
        }
        else if (month == nowMonth) {
            if (date > nowDate) {
                return true;
            }
            else if (date == nowDate) {
                if (hour > nowHour) {
                    return true;
                }
                else if (hour == nowHour) {
                    if (minute > nowMinute) {
                        return true;
                    }
                    else if (minute == nowMinute) {
                        if (seconds > nowSecond) {
                            return true;
                        }
                        else if (seconds == nowSecond) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};

/**
 * 剪切指定字符串中 `-`之前的内容
 * @param str 待剪切的字符串
 * @param divider 分隔符
 */
var sliceStrUntilDivider = function (str, divider) {
    var signIndex = str.indexOf(divider);
    if (signIndex < 0) {
        str = str.slice(0);
    }
    else {
        str = str.slice(0, signIndex && signIndex || null);
    }
    return str;
};

/**
 * 获取当前操作系统
 * @param appSign 需要区分的软件特有代码 如wldxm
 */
var getOS = function (appSign) {
    var ua = window.navigator.userAgent.toLowerCase();
    if (!appSign) {
        if (ua.indexOf('android') > -1) {
            return 'android';
        }
        else if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1) {
            return 'ios';
        }
        else {
            return null;
        }
    }
    else {
        if (ua.indexOf(appSign) == -1) {
            return null;
        }
        if (ua.indexOf('android') > -1) {
            return 'android';
        }
        else if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1) {
            return 'ios';
        }
        else {
            return null;
        }
    }
};

/**
 * 获取数组中元素的某个属性 返回一个新数组
 * @param list 源数组
 * @param field 用于过滤的字段
 * @returnValue 返回的数组
 */
var pumpFieldFromList = function (list, field) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        result.push(list[i][field]);
    }
    console.log('过滤得到的数组', result);
    return result;
};

/**
 * 转换JSON格式字符串为url拼接字符串
 * @param param JSON形式的参数字符串
 */
var transParams = function (param) {
    console.log('enter transparam', param);
    var paramObj = JSON.parse(param);
    var paramStr = '';
    for (var key in paramObj) {
        if (paramObj.hasOwnProperty(key)) {
            var element = paramObj[key];
            paramStr = "" + paramStr + (paramStr.length > 0 ? '&' : '?') + key + "=" + element;
        }
    }
    console.log('transParams转换后的参数', paramStr);
    return paramStr;
};

console.log('toUpper', toUpper);
console.log('formatPrice', formatPrice);
var index = {
    toUpper: toUpper,
    formatPrice: formatPrice,
    showShareHints: showShareHints,
    isAfterNow: isAfterNow,
    sliceStrUntilDivider: sliceStrUntilDivider,
    getOS: getOS,
    pumpFieldFromList: pumpFieldFromList,
    transParams: transParams,
    transFirstLetterToUpper: transFirstLetterToUpper
};

module.exports = index;
