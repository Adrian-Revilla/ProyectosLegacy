const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//nota: FALTA INICIALIZAR EL PLUGIN DE BUNDLE ANALIZER


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

  ];

  //plugins
  const HTMLWEBPACKPLUGINOPTS = {
    filename: 'index.html',
    template: 'src/GridTemplate/index.handlebars'
  };

  return {
    entry: { main: ENTRY },
    output: { path: OUTPUT, filename: JSFILENAME },
    mode: MODE,

    module: { rules: WEBPACKMODULERULES },

    resolve: { extensions: ['.tsx', '.ts', '.js'] },

    plugins: [
      new HtmlWebpackPlugin(HTMLWEBPACKPLUGINOPTS),
      new MiniCssExtractPlugin({ filename: 'bundle.css' })
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
    },

  }

}
/* externals : {

}, */


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


/*
  optimization: {
      minimize: true,
      minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
    },

*/