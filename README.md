# wtils

## Introduction

常用的js工具类

## Install

```bash
yarn add wtils
```

## Usage

```js
const wtils = require('wtils');
const platform = wtils.getOS();
console.log(platform);  // 获取平台
```

## API

### `transFirstLetterToUpper`

将传入的字符串首字母转换为大写。

|参数|描述|
|---|---|
|str|需要处理的字符串|

|返回值|描述|
|---|---|
|str|处理后的字符串|

使用：

```js
wtils.transFirstLetterToUpper('index')  // Index
```

### `formatPrice`

将传入的价格(字符串或数值)转换为字符串形式的两位小数。

|参数|描述|
|---|---|
|price|需要处理的价格值|

|返回值|描述|
|---|---|
|priceStr|格式化后的字符串|

使用：

```js
wtils.formatPrice('22.3')   // '22.30'
```

### `showShareHints`

展示引导点击右上角微信分享弹窗。

使用：

```js
wtils.showShareHints()
```

### `isAfterNow`

比较传入的时间是否晚于当前时间。

参数：无

|返回值|描述|
|---|---|
|isAfterNow| `true` - 晚于当前时间,  `false` - 不晚于当前时间 |

返回值：`true | false`

### `sliceStrUntilDivider`

从字符串开始到传入的分隔符剪切传入的字符串。

|参数|描述|
|---|---|
|str|字符串|
|divider|分隔符|

|返回值|描述|
|---|---|
|str|剪切后的字符串, string|

### `getOS`

判断当前浏览器运行环境。

|参数|描述|
|---|---|
|appSign|app标识|

|返回值|描述|
|---|---|
|str|当前浏览器运行环境, 'android'-安卓 'iOS'-iOS null-其他|

### `pumpFieldFromList`

遍历数组，获取数组元素的某个属性，返回一个新数组。

|参数|描述|
|---|---|
|list|数组, Array|
|field|需要抽取的字段名, string|

|返回值|描述|
|---|---|
|list|重新组装后的新数组， Array|

### `transParams`

转换JSON格式字符串为url拼接字符串。

|参数|描述|
|---|---|
|params|json字符串格式参数|

|返回值|描述|
|---|---|
|paramStr|拼装后的参数字符串，可用于链接拼接, string|

### `verifyEleInArr`

查找某个元素或值是否在数组中存在，如果存在则删除，否则push。

|参数|描述|
|---|---|
|list|数组|
|value|查找的值|
|field|用于比较的元素属性，如果不传则是直接比较数组item|

|返回值|描述|
|arr|处理后的数组|

## 更新日志

[点此前往](./CHANGELOG.md)

## TODO

[点此前往](./TODO.md)
