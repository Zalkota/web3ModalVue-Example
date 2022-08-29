const path = require('path')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { defineConfig } = require('@vue/cli-service')

 

require('dotenv').config()


const plugins = [new NodePolyfillPlugin()]


module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins 
  }
})
