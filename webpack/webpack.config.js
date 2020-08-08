const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SplitByPathPlugin = require("webpack-split-by-path");
const MyExampleWebpackPlugin = require("./plugins/example");
class HelloWorldPlugin {
    apply(compiler) {
      compiler.hooks.done.tap('Hello World Plugin', (
        stats /* stats is passed as an argument when done hook is tapped.  */
      ) => {
        console.log('Hello World!', stats);
      });
    }
  }
module.exports = {
  // JavaScript 执行入口文件
  entry: './main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader'],
        // use: ExtractTextPlugin.extract({
        // })
      },
      {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    //   new ExtractTextPlugin({
    //       filename: `[name]_[contenthash:8].css`,
    //   }),
    //   new SplitByPathPlugin(
    //     [{ name: 'vendor', path: __dirname + '/node_modules' }],
    //     { ignore: [__dirname + '/node_modules/css-loader'] }
    //   ),
    //   new MyExampleWebpackPlugin()
    new HelloWorldPlugin()
  ],
  devtool: "source-map"
};