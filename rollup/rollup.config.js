import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import filesize from 'rollup-plugin-filesize';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins:[
    resolve(),  // 解析node模块(rollup默认不支持)
    commonjs({   //  commonjs模块支持
      include: 'node_modules/**', // 包括
      exclude: [],  // 排除
    }),    
    babel({  // 运行babel配置
      exclude: '**/node_modules/**'   // 不打包node_modules中的文件
    }),
    uglify(),  // 压缩
    filesize(),  // 打包完毕后显示文件大小
  ],
}