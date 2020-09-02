const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//nota: FALTA INICIALIZAR EL PLUGIN DE BUNDLE ANALIZER
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = env => {

  //ansi escape colors
  const RED = '\u001b[31m%s\x1b[0m';

  let string = "▲▲▲▲▲▲PROJECT TARGET ::" + env.var1 + ":: PROJECT TARGET▲▲▲▲▲▲";

  console.log(RED, string);
  console.log(RED, '////////////////////////////////////////////////////////')

  const FOLDER = env.var1;
  const ENTRY = path.resolve(__dirname, `./src/${FOLDER}/index.ts`);
  const OUTPUT = path.resolve(__dirname, `./prod/${FOLDER}/`);
  const JSFILENAME = "bundle.js";
  const MODE = "production";

  //LOADERS
  const WEBPACKMODULERULES = [
    { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
    { test: /\.handlebars$/, loader: "handlebars-loader" },
    { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
    { test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
    { test: /\.(jpg|png|jpeg)$/i, loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'images' }}
  ];

  //plugins
  const HTMLWEBPACKPLUGINOPTS = {
    filename: 'index.html',
    template: `src/${FOLDER}/index.handlebars`,
    inject: true
  };

  const MiniCssExtractPlugin_opt = {filename: 'bundle.css'}

  let resolve = {extensions: ['.tsx', '.ts', '.js']}

  return {
    entry: { main: ENTRY },
    output: { path: OUTPUT, filename: JSFILENAME },
    mode: MODE,
    module: { rules: WEBPACKMODULERULES },

    resolve: {...resolve},

    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(MiniCssExtractPlugin_opt),
      new HtmlWebpackPlugin(HTMLWEBPACKPLUGINOPTS),
      // new BundleAnalyzerPlugin()
      // new CompressionPlugin()
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
    },

    //en el dia 26 de agosto no he probado el webpack config con este asset. sirve para poder declaras reactjs SIN INCLUIRLO EN EL BUNDLE 
    // SOLO LO HE PROBADO CON JAVASCRIPT Y NO CON TYPESCRIPT
    externals: {
      "react": "React",
      "react-dom": "ReactDOM",
      jquery: 'jQuery',
    }
  }

}