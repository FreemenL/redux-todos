const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcPath = path.resolve(__dirname,'./src');
const config = {
    entry:{
        app:path.resolve(__dirname,'./src/app.js')
    },
    output:{
      filename:'[name].bundle.js',
      path:path.resolve(__dirname,'dist')
    },
    devtool: 'inline-source-map',
    module:{
      rules:[{
        test:/\.bundle\.js$/,
        use:'bundle-loader'
      },{
        test:/\.(js|jsx)$/,
        use:'babel-loader'
      },{
       test: /\.css$/,
       use: [
         'style-loader',
         'css-loader'
       ]
     },{
      test:/\.(png|svg|jpg|gif)/,
      use:[
        'file-loader?name=images/[hash:8].[name].[ext]',{
          loader:'image-webpack-loader',
          options:{
            bypassOnDebug:true,
          }
        }
      ]
     },{
       test: /\.(woff|woff2|eot|ttf|otf)$/,
       use: [
         'file-loader'
       ]
     }]
    },
    plugins:[
      new HtmlWebpackPlugin({
        title:'learn redux',
        template:'./template/index.html'
      }),//自动生成html
      new webpack.HotModuleReplacementPlugin()
    ],
    resolve:{
    extensions: [".js", ".json",".jsx"],
    alias:{//配置路径常量
      components:`${srcPath}/components`,
      actions:`${srcPath}/actions`,
      constants:`${srcPath}/constants`,
      containers:`${srcPath}/containers`,
      reducers:`${srcPath}/reducers`
    }
  }
}


module.exports = config;