/**
 * 获取数组中元素的某个属性 返回一个新数组
 * @param list 源数组
 * @param field 用于过滤的字段
 * @returnValue 返回的数组
 */
export const pumpFieldFromList = (list: Array<any>, field: string) => {
    var result: Array<any> = [];
    for (var i = 0; i < list.length; i++) {
        result.push(list[i][field]);
    }
    console.log('过滤得到的数组', result);
    return result;
};
