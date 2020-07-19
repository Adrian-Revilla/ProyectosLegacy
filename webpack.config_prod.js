const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
module.exports = env =>  {

  const carpeta=env.var1;
  return{


  
    entry: path.resolve(__dirname, `./src/${carpeta}/entry.js`),
    output: {
      path: path.resolve(__dirname, './prod/'),
      filename: "bundle.js",
      publicPath: '/'
    },
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          }
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader']

        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },

        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          include: path.resolve(__dirname, 'src'),
          use: {

            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              
            }

          }
          

        },
        /* {
            test: /\.(jpg|png|jpeg)$/i,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath:'images'
            }
            
        }, */
        {
          test: /\.(ico)$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          }
            
        },
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
      })

    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
    },
    externals : {
      react: 'React',
      'react-dom': 'ReactDOM'
    },
  }

}