import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins:[
    resolve(),  // 解析node模块(rollup默认不支持)
    babel({  // 运行babel配置
      exclude: '**/node_modules/**'   // 不打包node_modules中的文件
    }),
    commonjs({
      include: 'node_modules/**', // 包括
      exclude: [],  // 排除
    }),
  ],
}