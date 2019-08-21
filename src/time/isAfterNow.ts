// 是否晚于当前时间
const isAfterNow = ( compareDate: any ) => {
  var now = new Date()
  var dater = new Date(compareDate)
  var year = dater.getFullYear()
  var month = dater.getMonth()
  var date = dater.getDate()
  var hour = dater.getHours()
  var minute = dater.getMinutes()
  var seconds = dater.getSeconds()

  var now = new Date()
  var nowYear = now.getFullYear()
  var nowMonth = now.getMonth()
  var nowDate = now.getDate()
  var nowHour = now.getHours()
  var nowMinute = now.getMinutes()
  var nowSecond = now.getSeconds()

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
}

export default isAfterNow