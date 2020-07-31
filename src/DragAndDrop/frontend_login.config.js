const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports={
  entry:'./src/frontend/login/login.js',
  output:{
    path:__dirname + '/distribucion_final/login/', 
    filename:'bundle.js'
  },
  module:{
    rules:[{
      test:/\.css$/i,
      use:[{loader:MiniCssExtractPlugin.loader}, 'css-loader']
    },
    {
      test:/\.(eot|svg|ttf|woff)$/i,
      use:[{loader:'file-loader',
        options: {
          name:'[name].[ext]',
          outputPath:"fonts" 
        }}]
    
    }
  
  ]
  },
  optimization:{
    minimizer:[new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  plugins:[
    new MiniCssExtractPlugin({filename:'bundle.css'}),
  ]
}
