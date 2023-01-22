const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  experiments:{
    asyncWebAssembly: true,
    syncWebAssembly: true,
  },
  module: {
    rules: [
        {
            test: /\.ts$/,
            loader: 'ts-loader',
            options: {
                configFile: 'tsconfig.json',
            },
        },
        {
            test: /\.wasm$/,
            type: "asset/inline",
        },
    ],
},
})
