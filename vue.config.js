const path = require('path');
const { defineConfig } = require('@vue/cli-service');


module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
      port: 3500,
        allowedHosts: 'all'
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('ptgmp-admin', path.resolve(__dirname, 'src/ptgmp-admin'));

        config.resolve.alias
            .set('common', path.resolve(__dirname, 'src/common'));

        // console.log({ config });
        config.entryPoints.delete('app');
        config.entry('app').add('./src/ptgmp-admin/app.js').end().end();
    },
})
