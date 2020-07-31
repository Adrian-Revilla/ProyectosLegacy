const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports={

    entry:{
        name:'./src/frontend/inicio/inicio.js'
    },
    output:{
        path:__dirname + '/distribucion_final/inicio/',
        filename: 'js_bundle.js',
        
    },
   module:{
        rules:[
            {
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
            
        ],
    },
    optimization:{
        minimizer:[new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
      },
    plugins:[
        new MiniCssExtractPlugin({filename:'home_bundle.css'}),
       
      ]
}

