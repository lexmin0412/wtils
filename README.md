### npm publish

```javascript
mkdir cutils  // 新建文件夹
npm init      // npm初始化
nrm ls        //  查看当前配置
nrm use npm  // 切换npm源
npm login
npm publish
```

### nrm
> 用于管理和快速切换私人配置的registry
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