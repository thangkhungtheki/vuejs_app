const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    //host: '0.0.0.0',// Địa chỉ IP của máy chủ
    port: 5002, // Thay đổi cổng này thành cổng mà bạn muốn sử dụng
    compress: true,
   
  },
  lintOnSave: false // disable multiword components 
})
