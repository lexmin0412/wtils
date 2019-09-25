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

/**
 * 查找某个元素或值是否在数组中存在，如果存在则删除，否则push
 * @param list 数组
 * @param value 查找的值
 * @param field 用于比较的元素属性 如果不传则是直接比较数组item
 */
export const verifyEleInArr = (list, value, field?: string) => {
	let resultList: Array<any> = [...list]
	const index = list.findIndex((item, index) => {
		return item === value
	})
	if (index > -1) {
		resultList.splice(index, 1)
	}
	else {
		resultList.push(value)
	}
	return resultList
}