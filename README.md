### npm publish

```javascript
mkdir cutils  // 新建文件夹
npm init      // npm初始化
nrm ls        //  查看当前配置
nrm use npm  // 切换npm源
npm login
npm publish

npm install rollup -g  // 全局安装rollup
// 新建rollup.config.js 编辑配置文件
rollup -c  // 依据rollup.config.js配置文件中的配置来使用rollup打包
```

### nrm
> 用于管理和快速切换私人配置的registry
### npm
[https://www.npmjs.com/package/wld-utils](https://www.npmjs.com/package/wld-utils)

```javascript
npm i nrm -g  // 全局安装nrm
nrm ls  //  查看当前配置
nrm use npm  // 切换npm源
```

### 常见错误
```javascript
`You do not have permission to publish "cc-utils". Are you logged in as the correct user?`
// npm已经存在同名包
```

### npm常用命令
```javascript
npm update [package name] -D  // 更新指定npm包
```