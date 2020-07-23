const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    
    //ansi escape colors
    const RED = '\u001b[31m%s\x1b[0m';

    let string = "▲▲▲▲▲▲PROJECT TARGET ::" + env.var1 + ":: PROJECT TARGET▲▲▲▲▲▲";

    console.log(RED, string);
    console.log(RED,'////////////////////////////////////////////////////////')

    const FOLDER = env.var1;
    const ENTRY = path.resolve(  __dirname, `./src/${FOLDER}/index.ts`);
    const OUTPUT = path.resolve( __dirname, `./prod/${FOLDER}/`);
    const JSFILENAME = "bundle.js";
    const MODE = "development";
    
    //LOADERS
    const WEBPACKMODULERULES = [
        { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
        { test: /\.handlebars$/, loader: "handlebars-loader" },
        { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
        { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },

    ];

    //webpack-dev-server
    const PORT = 4040;
    const DEV_SERVER_PATH = path.resolve(__dirname, OUTPUT);

    //plugins
    const HTMLWEBPACKPLUGINOPTS = {
        filename: 'index.html',
        template: 'src/GridTemplate/index.handlebars'
    };

    return {
        entry: { main: ENTRY },        
        output: { path: OUTPUT , filename: JSFILENAME },
        mode: MODE,

        module: { rules: WEBPACKMODULERULES },

        resolve: { extensions: ['.tsx', '.ts', '.js'] },

        plugins: [
            new HtmlWebpackPlugin(HTMLWEBPACKPLUGINOPTS)
        ],
        
        devServer: { contentBase: DEV_SERVER_PATH, port: PORT, open: true, stats:'minimal' }
    }

}

/* {
    test: /\.(jpg|png|jpeg)$/i,
    loader: 'file-loader',
    options: {
        name: '[name].[ext]',
        outputPath: 'images'
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