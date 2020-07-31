const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin= require('terser-webpack-plugin');
module.exports={
    entry: "./public/modules/MAIN.js",
    output:{
        path: __dirname + "/public/build/",
        filename:"bundle.js"
    },
    module: { //convertidor de css
        rules: [
            {
                test: /\.css$/, //\.css$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            },
            {
                test: /\.(png|jpg|gif|ico|jpeg)$/i,
                loader: 'file-loader',
                options:{
                    name:'static/[name].[ext]'
                }
            }

        ]
    },
    plugins:[
        new MiniCssExtractPlugin({filename:"bundle.css"}) //extraer css
    ],
    optimization:{
        minimizer:[new TerserJSPlugin({}),new OptimizeCssAssetsPlugin({})]
    }
    
}