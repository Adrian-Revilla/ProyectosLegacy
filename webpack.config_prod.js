const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//nota: FALTA INICIALIZAR EL PLUGIN DE BUNDLE ANALIZER
const path = require('path');
module.exports = env =>  {

  const carpeta=env.var1;
  return{


  
    entry: path.resolve(__dirname, `./src/${carpeta}/index.ts`),
    output: {
      path: path.resolve(__dirname, './prod/'),
      filename: "bundle.js",
    },
    mode: 'production',
    module: {
      rules: [
        { test: /\.handlebars$/, loader: "handlebars-loader" },
        /* {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        }, */

        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        /* {
            test: /\.(jpg|png|jpeg)$/i,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath:'images'
            }
            
        }, */
        /* {
          test: /\.(ico)$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          }
            
        }, */
        /* {
            test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',
                outputPath:'fonts'
            }
        } */
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'bundle.css'
      }),
      new HtmlWebpackPlugin({
        filename:'index.html',
        template:'src/GridTemplate/index.handlebars',
        
      })

    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
    },
    /* externals : {
      react: 'React',
      'react-dom': 'ReactDOM'
    }, */
  }

}