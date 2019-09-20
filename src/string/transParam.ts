/**
 * 转换JSON格式字符串为url拼接字符串
 * @param param JSON形式的参数字符串
 */
export const transParams = (param) => {
  console.log('enter transparam', param);
  let paramObj = JSON.parse(param);
  let paramStr = ''
  for (const key in paramObj) {
    if (paramObj.hasOwnProperty(key)) {
      const element = paramObj[key];
      paramStr = `${paramStr}${paramStr.length>0?'&':'?'}${key}=${element}`;
    }
  }
  console.log('transParams转换后的参数', paramStr);
  return paramStr;
}