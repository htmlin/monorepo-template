module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default',
        {
          mergeLonghand: false,
          mergeRules: false, // 合并不支持的选择器的规则会导致支持的也不可用
        },
      ],
    }),
  ],
}
